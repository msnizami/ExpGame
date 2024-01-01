import os
import pandas as pd

def calculate_costs(block_no):
    if block_no == 1:
        return [3, 2, 3, 2, 3]
    elif block_no == 2:
        return [5, 3, 1, 3, 5]
    elif block_no == 3:
        return [1, 3, 5, 3, 1]
    else:
        raise ValueError(f"Unsupported block number: {block_no}")

def calculate_incurred_cost(row, costs):
    return sum(row['CFplant' + str(i + 1)] * cost for i, cost in enumerate(costs))

def aggregate_and_create_column(file_path, columns_to_aggregate):
    try:
        # Read the CSV file into a DataFrame
        df = pd.read_csv(file_path)

        # Create a new column 'incurredCost' with the aggregated values
        df['incurredCost'] = df.apply(lambda row: calculate_incurred_cost(row, calculate_costs(row['planetNo'])), axis=1)
        df['attemptNo'] = df.groupby(['userId', 'planetNo']).cumcount() + 1
        df.to_csv(file_path, index=False)

    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
    except pd.errors.EmptyDataError:
        print(f"Error: File '{file_path}' is empty.")
    except pd.errors.ParserError:
        print(f"Error: Unable to parse the CSV file '{file_path}'. Check the file format.")


def calculate_budget_left(csv1_path, output_path):
    # Read CSV file
    csv1 = pd.read_csv(csv1_path)

    # Sort the DataFrame by userId, blockNo, and trialNo
    csv1 = csv1.sort_values(by=['userId', 'planetNo', 'attemptNo'])

    # Initialize budgetLeft column with a budget of 70 for each userId
    csv1['budgetLeft'] = 90

    # Iterate through rows and subtract incurredCost based on blockNo
    for idx, row in csv1.iterrows():
        if idx == 0:
            csv1.at[idx, 'budgetLeft'] = csv1.at[idx, 'budgetLeft'] - row['incurredCost']
        if idx > 0 and row['userId'] != csv1.at[idx - 1, 'userId']:
            if row['planetNo'] == 1 and row['attemptNo'] == 1:
                csv1.at[idx, 'budgetLeft'] = csv1.at[idx, 'budgetLeft'] - row['incurredCost']
        if idx > 0 and row['userId'] == csv1.at[idx - 1, 'userId']:
            if row['planetNo'] == csv1.at[idx - 1, 'planetNo'] and row['attemptNo'] >= 2:
                if csv1.at[idx, 'incurredCost'] == 0:
                    csv1.at[idx, 'budgetLeft'] = csv1.at[idx - 1, 'budgetLeft'] - row['incurredCost']

        if idx > 0 and row['userId'] == csv1.at[idx - 1, 'userId']:
            if row['planetNo'] == csv1.at[idx - 1, 'planetNo']:
                # Subtract incurredCost from the budgetLeft for the same blockNo
                csv1.at[idx, 'budgetLeft'] = csv1.at[idx, 'budgetLeft'] - row['incurredCost']
            else:
                # Assign the budgetLeft of the previous blockNo to the current blockNo
                csv1.at[idx, 'budgetLeft'] = csv1.at[idx - 1, 'budgetLeft'] - row['incurredCost']
                # # Subtract incurredCost from the budgetLeft for the different blockNo
                # csv1.at[idx, 'budgetLeft'] -= row['incurredCost']

    # Save the final DataFrame to a new CSV file
    csv1.to_csv(output_path, index=False)

def merge_csv_files(csv1_path, csv2_path, output_path, output_path1):
    # Read CSV files
    csv1 = pd.read_csv(csv1_path)
    csv2 = pd.read_csv(csv2_path)

    # Merge based on specified columns or use default columns (userId, blockNo, trialNo)
    merge_columns = ['userId', 'planetNo', 'attemptNo']
    columns_csv = ['incurredCost', 'budgetLeft', 'newPred']

    # Merge based on specified columns
    merged_df = pd.merge(csv1[merge_columns + columns_csv],
                         csv2[merge_columns + columns_csv],
                         on=merge_columns, how='outer', suffixes=('_UFCE', '_DiCE'))

    # Save the merged DataFrame to a new CSV file
    merged_df.to_csv(output_path, index=False)
    merged_df.to_excel(output_path1, index=False)


    
if __name__ == "__main__":
    # Define the file paths
    csv1_path = 'logData/performance.csv'
    csv2_path = 'logData/performance_dice.csv'
    csv3_path = 'logData/results.csv'
    csv3_path1 = 'logData/output.xlsx'

    # Define columns to be extracted from each CSV
    columns_to_aggregate = ['CFplant1','CFplant2','CFplant3','CFplant4','CFplant5']
    
    # Call the function with the provided arguments for the first file
    aggregate_and_create_column(csv1_path, columns_to_aggregate)
    # Call the function with the provided arguments for the second file
    aggregate_and_create_column(csv2_path, columns_to_aggregate)

    # Example usage
    calculate_budget_left(csv1_path, csv1_path)  # UFCE
    calculate_budget_left(csv2_path, csv2_path)  # DiCE

    # custom columns to merge
    merge_csv_files(csv1_path, csv2_path, csv3_path, csv3_path1)
