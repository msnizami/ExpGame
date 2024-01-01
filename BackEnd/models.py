# -*- coding: utf-8 -*-
import pprint
import json
import sklearn
import joblib
import itertools
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, accuracy_score
from sklearn.metrics import confusion_matrix, precision_score, recall_score, auc,roc_curve, mean_squared_error, r2_score
# from imblearn.over_sampling import SMOTE
# from imblearn.under_sampling import RandomUnderSampler

import dice_ml
from ufce import *
from regressors import *
ufc = UFCE()

# Fit model
def build_model():
    import pandas as pd
    import random
    random.seed(42)
    from joblib import dump, load
    from sklearn.tree import DecisionTreeRegressor
    from sklearn.linear_model import LogisticRegression
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import mean_squared_error, r2_score

    expNo = 1; # or 2; specifies which version you want to run (Experiment 1 or Experiment 2)
                # NOTE: the information about experimental number is NOT LOGGED!
                # if you don't want to mix data from different versions, make sure
                # to clear the database in between or use different databases for each run

    if expNo == 1:
        fin_data_file_path="modelData/dataset_IAZ_EXP1.npz" # where to save train / test data
        model_file_path="modelData/model_IAZ_EXP1.joblib" # where to save model
        source_data_file_path = "modelData/AlienZooDataSet_EXP1.csv"  # source data
    elif expNo == 2:
        source_data_file_path="modelData/AlienZooDataSet_EXP2.csv" # source data
        fin_data_file_path="modelData/dataset_IAZ_EXP2.npz"  # where to save train / test data
        model_file_path="modelData/model_IAZ_EXP2.joblib" # where to save model
    else:
        raise ValueError("Unknown value supplied to variable expNo in models.py!")


    ### Open this code when trainign, testinf and saving model, data
    # df = pd.read_csv(source_data_file_path)
    # # converting target label into binary (classification)
    # df['class'] = df['class'].apply(lambda x: 1 if x > 1.3 else 0)
    # df = df.round().astype(int)

    # # introducing the dependencies for Var2
    # df.loc[df['Var2'] >= 3, 'class'] = 1
    # df.loc[df['Var2'] < 3,  'class'] = 0
    # # introducing the dependencies for Var2 and Var4
    # df.loc[(df['Var2'] >= 3) & (df['Var4'] >= 3), 'class'] = 1
    # df.loc[(df['Var2'] < 3) & (df['Var4'] < 3), 'class'] = 0
    # # introducing the dependencies for Var2, Var4, and Var5
    # df.loc[(df['Var2'] >= 3) & (df['Var4'] >= 3) & (df['Var5'] >= 3), 'class'] = 1
    # df.loc[(df['Var2'] < 3) & (df['Var4'] < 3) & (df['Var5'] < 3), 'class'] = 0

    # X = df.drop('class', axis=1)
    # # only keeping the records with no feature having value=0
    # X_indexes = X[(X != 0).all(axis=1)].index
    # # Keep only the rows where the index matches the filtered_indexes
    # df_filtered = df.loc[X_indexes]
    # df_filtered.to_csv('modelData/data/AFH_EXP1.csv', index=False)
    # X = df_filtered.drop('class', axis=1)
    # # df = df[(df != 0).all(axis=1)]
    # y = df_filtered['class']

    # print(X.shape)
    # print(y.shape)
    # unique_classes, class_counts = np.unique(y, return_counts=True)
    # print(class_counts)

    # # FOLLOWING COMMENTS CONTAIN CODE FOR MODEL COMPUTATION
    # # FOR CONVENIENCE, we'll load the precomputed model below
    # # # settings for compute balanced data + max tree depth
    # # bins=5

    # # # Binning
    # # _, bin_values = np.histogram(y, bins=bins)
    # # y_binning = [list(bin_values).index(bin_values[np.argmin(np.abs(bin_values - y_))]) for y_ in y]

    # # # # Split into training and test set
    # X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)


    # # # Fit model
    # model = LogisticRegression(solver='lbfgs',penalty='l2', C=0.001, max_iter=1000)
    # model.fit(X_train.values, y_train)

    # # # Evaluate
    # y_pred = model.predict(X_test.values)
    # print('Accuracy of logistic regression classifier on train set: {:.2f}'.format(model.score(X_train, y_train)))
    # print('Accuracy of logistic regression classifier on test set: {:.2f}'.format(model.score(X_test, y_test)))
    print('server is running...')

    # # Save dataset and model
    # # np.savez(fin_data_file_path, X_train=X_train, X_test=X_test, y_train=y_train, y_test=y_test)
    # X_test.to_csv('modelData/data/X_test.csv', index=False)
    # # saving the Xtest records with negative outcomes to use for game test
    # X_2test = pd.DataFrame()
    # for x in range(len(X_test[:10])):
    #     if model.predict(X_test[x:x + 1].values)==1:
    #         X_2test = pd.concat([X_2test, X_test[x:x+1]], ignore_index=True)
    # X_2test.to_csv('modelData/data/X_2test.csv', index=False)
    # X_train.to_csv('modelData/data/X_train.csv', index=False)
    # y_test.to_csv('modelData/data/y_test.csv', index=False)
    # y_train.to_csv('modelData/data/y_train.csv', index=False)
    # dump(model, model_file_path)

    # # Load pre-computed dataset and model
    X_test = pd.read_csv('modelData/data/X_test.csv')
    X_2test = pd.read_csv('modelData/data/X_2test.csv')
    X_train = pd.read_csv('modelData/data/X_train.csv')
    y_test = pd.read_csv('modelData/data/y_test.csv')
    y_train = pd.read_csv('modelData/data/y_train.csv')
    model = load(model_file_path)

    # print(dat.files)
    # X_train=dat['X_train']
    # X_test=dat['X_test']
    # y_train=dat['y_train']
    # y_test=dat['y_test']

    # # Evaluate
    #y_pred = model.predict(X_test.values)
    # print('Accuracy of logistic regression classifier on train set: {:.2f}'.format(model.score(X_train, y_train)))
    # print('Accuracy of logistic regression classifier on test set: {:.2f}'.format(model.score(X_test, y_test)))

    # # Serialize the model to JSON for using on frontend in js scripts
    # model_data = {
    #     "coefficients": model.coef_.tolist(),
    #     "intercept": model.intercept_.tolist(),
    #     "classes": model.classes_.tolist()
    # }

    # # Save the model_data to a file (or send it to the frontend)
    # with open("logistic_regression_model.json", "w") as json_file:
    #     json.dump(model_data, json_file)

    return {"model": model, "X_train": X_train, "y_train": y_train, "X_test": X_test, "y_test": y_test}

# this will return user-constraints specific to data set, customise them
# features, catf, numf, uf, step, f2change, outcome_label, desired_outcome, nbr_features, protectf, data_lab0, data_lab1 = get_bank_user_constraints(datasetdf)

def compute_counterfactual_of_model(test_instance, testno, uf, bb):
    train_and_save_regressors()
    regressors = load_regressors('modelData/data/regressors_EXP1.joblib')
    features = ['Var1','Var2', 'Var3', 'Var4', 'Var5']
    catf = []
    numf = features
    df2test = pd.read_csv("modelData/data/X_2test.csv")
    print('test instance:', df2test[testno-1:testno].values) #df2test[testno-1:testno].values
    ### simulation of DiCE and printing its results and later saving in the db for comparison
    # dice start
    # print("DiCE CF")
    # std = time()
    source_data_file_path = "modelData/data/AFH_EXP1.csv"  # source data
    df = pd.read_csv(source_data_file_path)
    dataset = df.round().astype(int)
    d = dice_ml.Data(dataframe=dataset, continuous_features=['Var1', 'Var2', 'Var3', 'Var4', 'Var5'], outcome_name='class')
    backend = 'sklearn'
    m = dice_ml.Model(model=bb, backend=backend)
    # initiate DiCE
    exp_random = dice_ml.Dice(d, m, method="kdtree")
    # generate counterfactuals
    dice_exp_random = exp_random.generate_counterfactuals(df2test[testno-1:testno], total_CFs=1, desired_class="opposite", verbose=False)
    # dice_exp_random.visualize_as_dataframe(show_only_changes=False)
    dice_cf = dice_exp_random.cf_examples_list[0].final_cfs_df
    print('dice')
    print(dice_cf.columns)
    print(dice_cf.values)
    #TODO
    # need to extract from the json of user start and end. # consult # need to write a dedicated method
    # uf = {'Var1':3,'Var2':1, 'Var3':4, 'Var4':0, 'Var5':4}

    # set a specific small step size
    step = {'Var1':1,'Var2':1, 'Var3':1, 'Var4':1, 'Var5':1}

    # changing only features which are in uf
    f2change = [] #features # all features
    for f in df2test[testno-1:testno].columns: # also here df2test[testno-1:testno].columns
            if df2test[testno-1:testno][f].values != uf[f]:
                f2change.append(f)
    # print(f2change)
    outcome_label = 'class'
    desired_outcome = 1
    nbr_features = 5
    protectf = []

    source_data_file_path = "modelData/data/AFH_EXP1.csv"  # source data
    df = pd.read_csv(source_data_file_path)
    df = df.round().astype(int)
    X = df.drop('class', axis=1)
    y = df['class']
    # desired space
    data_lab1 = pd.DataFrame()
    data_lab1 = df[df["class"] == 1]
    data_lab0 = df[df["class"] == 0]
    data_lab1 = data_lab1.drop(['class'], axis=1)
    catf = []
    numf = X.columns
    # return features, catf, numf, uf, step, f2change, outcome_label, desired_outcome, nbr_features, protectf, data_lab0, data_lab1

    # Take top mutual information sharing pairs of features
    # MI_FP = ufc.get_top_MI_features(df)

    #load the saved dcitionary of MI_pairs
    with open('modelData/feature_pairs.json', 'r') as file:
        MI_FP = json.load(file)
    # print('top mi features', MI_FP[:5])
    k = 1
    protected_features = []
    data_lab1 = data_lab1.sample(frac=1)
    nn, idx = ufc.NNkdtree(data_lab1[:10000], df2test[testno-1:testno], 300) #df2test[testno-1:testno] #increase radius size as per the dataset
    if nn.empty != True:
        interval = ufc.make_intervals(nn, uf, f2change, test_instance) #df2test[testno-1:testno] # also use cfs instead of nn #TODO it could be skipped by taking directly user upper and lower values
        # print('one interval here', interval)
        cc = ufc.Single_F(test_instance, catf, f2change, interval, bb, desired_outcome, step, regressors) #df2test[testno-1:testno]
        intervals = ufc.make_uf_nn_interval(nn, uf, MI_FP[:5], test_instance) #df2test[testno-1:testno]
        # print('two intervals here', intervals)
        cc2, _ = ufc.Double_F(df, test_instance, protected_features, f2change, MI_FP[:5], catf, numf, intervals, features, bb, desired_outcome, regressors) #df2test[testno-1:testno]
        # cc3, _ = ufc.Triple_F(df, test_instance, protected_features, f2change, MI_FP[:5], catf, numf, intervals, features, bb, desired_outcome, regressors) #df2test[testno-1:testno]
    else:
        raise ValueError('no neighbourhood found in the given range.')
    # print(len(cc), len(cc2))
    # print('cc', cc)
    # print('cc2', cc2)

    final_df = pd.DataFrame()
    if cc.empty != True:
        final_df = pd.concat([final_df, cc], ignore_index=True, axis=0, sort=False)
    if cc2.empty != True:
        final_df = pd.concat([final_df, cc2], ignore_index=True, axis=0, sort=False)
    # if cc3.empty != True:
    #     final_df = pd.concat([final_df, cc3], ignore_index=True, axis=0, sort=False)
    # nearest cf
    # x = np.array([0, 0, 0, 0, 0], dtype=int).reshape(1, -1)
    # x = pd.DataFrame(x, columns=['Var1', 'Var2', 'Var3', 'Var4', 'Var5'])
    if final_df.empty != True:
        distances = np.linalg.norm(final_df.values - df2test[testno-1:testno].values, axis=1)
        nearest_row_index = np.argmin(distances)
        nearest_cf = final_df.iloc[[nearest_row_index]]
        # print('final_df', nearest_cf)
    else:
        nearest_cf = pd.DataFrame([uf])
        if bb.predict(nearest_cf.values) == desired_outcome:
            # print('nearest_cf', nearest_cf)
            return nearest_cf, dice_cf
        else:
            x = np.array([0, 0, 0, 0, 0], dtype=int).reshape(1, -1)
            nearest_cf = pd.DataFrame(x, columns=['Var1', 'Var2', 'Var3', 'Var4', 'Var5'])
            return nearest_cf, dice_cf
    # f_cf = nearest_cf.applymap(lambda x: int(x) if isinstance(x, (float, int)) else x)
    print('ufce')
    print(nearest_cf.columns)
    print(nearest_cf.values)
    return nearest_cf, dice_cf

def compute_counterfactual_of_model_control(dataset, test_instance, bb):
    #TODO: To load the dataset inside the body of function, and removing the dataset parameter from parameters. 
    #      Thus, the same handler can be utilised to call the compute_counterfactual_of_model_control(), and other control functions.
    d = dice_ml.Data(dataframe=dataset, continuous_features=['Var1', 'Var2', 'Var3', 'Var4', 'Var5'], outcome_name='class')
    backend = 'sklearn'
    m = dice_ml.Model(model=bb, backend=backend)
    # initiate DiCE
    exp_random = dice_ml.Dice(d, m, method="kdtree")
    # generate counterfactuals
    dice_exp_random = exp_random.generate_counterfactuals(test_instance, total_CFs=1, desired_class="opposite", verbose=False)
    dice_exp_random.visualize_as_dataframe(show_only_changes=True)
    # dice_cf = dice_exp_random.cf_examples_list[0]
    # if len(dice_cf) != 0:
    #     print(dice_cf)
def compute_sggestion_counterfactual(test_instance, bb, uf_flexible):
    feature_suggestion = []
    feature_new_values = []
    # require implementation
    return feature_suggestion, feature_new_values

def suggest_features(df):
    sug1, sug2, sug3 =  ufc.get_top_MI_features(df)
    # simple correlation or the features which will be changed in cf1,cf2,cf3. computing from change and identifying features.
    return sug1, sug2, sug3

def calculate_budget(test, cf):
    diff = cf - test
    budget = diff.sum().sum()
    return budget

def load_regressors(filename):
    # Load the models from the file
    loaded_models_dict = joblib.load(filename)
    return loaded_models_dict

if __name__ == "__main__":
    m = build_model()
    # # train_and_save_regressors()
    # regressors = load_regressors('modelData/data/regressors.joblib')
    # # Access an individual model by specifying the corresponding feature and 'model'
    # # X_test = m['X_test']
    # dataset = pd.read_csv('modelData/data/AFH_EXP1.csv')
    # X_test = pd.read_csv('modelData/data/X_2test.csv')
    # uf = {'Var1':[4],'Var2':[3], 'Var3':[3], 'Var4':[1], 'Var5':[5]}
    # # X_test.sample(frac=1)
    # # for x in range(4):
    # testno = 1
    # uf_df = pd.DataFrame(uf)
    # print("uf prediction:", m['model'].predict(uf_df.values))

    # uf = {'Var1':2,'Var2':3, 'Var3':0, 'Var4':4, 'Var5':2}
    # if m['model'].predict(X_test[0:1].values) == 0:
    #     print('Test',X_test[0:1])
    #         # print('DiCE')
    #         # compute_counterfactual_of_model_control(dataset, x, m['model'])
    #     cc2 = compute_counterfactual_of_model(X_test[0:1],testno, uf, m['model'])
    #         # b1 = calculate_budget(X_test[x:x+1], cc[:1])
    #         # b2 = calculate_budget(X_test[x:x+1], cc2[:1])
    #         # print('one-f:', cc[:1].values,b1, 'two-f',cc2[:5].values,b2)
    #         # print('cc:', cc2[:1])


