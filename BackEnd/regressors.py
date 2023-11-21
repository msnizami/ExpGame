import joblib
import math
import itertools
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import KFold
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import mean_squared_error, r2_score


def train_and_save_regressors():
    df = pd.read_csv('modelData/data/AFH_EXP1.csv')
    X_ = df.drop('class', axis=1)

    # if required to predict feature_pair-based regression, then feature pairs
    # feature_pairs = list(itertools.combinations(df.columns.drop(target_col), 2))
    # Initialize a dictionary to store the models
    models_dict = {}
    # Loop through all feature pairs
    for feature in X_.columns:
        # Extract feature_1 and feature_2 data
        X = X_.drop(feature, axis=1)
        y = X_[feature].values

        # Split the data into training and testing sets
        X_train, X_test, y_train, y_test = train_test_split(X.values, y, test_size=0.2, random_state=42)

        # Initialize and train the linear regression model
        model = LogisticRegression()
        model.fit(X_train, y_train)

        # Evaluate the model using mean squared error
        y_pred = model.predict(X_test)
        mse = mean_squared_error(y_test, y_pred)
        R2 = r2_score(y_test, y_pred)

        #print(cross_val_score(model, X_train, y_train, scoring='r2', cv=5))

        # Store the model and performance metrics in the dictionary
        model_key = f"{feature}"
        models_dict[model_key] = {
            "model": model,
            "mse": mse,
            "R2": R2
        }

        # print("Mean of X Training set: ", np.mean(X_train), "\n")
        # print("Median of X Training set: ", np.median(X_train), "\n")
        # print("Mean of Y Training set: ", np.mean(y_train), "\n")
        # print("Median of Y Training set: ", np.median(y_train), "\n")
        # print("Std Dev of X Training set: ", np.std(X_train), "\n")
        # print("Std Dev of Y Training set: ", np.std(y_train), "\n")
        # plt.title('Relationship between X and Y')
        # plt.scatter(X_train, y_train, color='black')
        # plt.show()
        #
        # # Use subplot to have graphs side by side
        # plt.subplot(1, 2, 1)
        # plt.title('X training set')
        # plt.hist(X_train)
        #
        # plt.subplot(1, 2, 2)
        # plt.title('Y training set')
        # plt.hist(y_train)
        # plt.show()
        #
        # plt.subplot(1, 2, 1)
        # plt.title('X training set')
        # plt.boxplot(X_train)
        #
        # plt.subplot(1, 2, 2)
        # plt.title('Y training set')
        # plt.boxplot(y_train)
        # plt.show()
    # Save the models to a file using joblib
    joblib.dump(models_dict, 'modelData/data/regressors_EXP1.joblib')