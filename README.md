# README

This repository provides code scripts for the Alien Fitness Hub framework as used in the study:
["XYZ to be published"]

Detailed motivation and rationale are explained in the paper. In short, we provide this framework as a utility to run user studies to perform human level evaluations of counterfactual explanations (CFEs) for machine learning (ML).

## Rough overview of implementation logic

Implementation of the experimental framework follows a clear separation into python-based [BackEnd](BackEnd/), and a javascript based [FronEnd](FrontEnd/). 

## I want to replicate the experiments as described in the paper!

Very well! Let's go:

### Requirements and prerequisites

There is a list of steps that first need to be done on the BackEnd side before we can go to the Alien Zoo.

0. Whatever you do, use Python3.
1. `cd BackEnd`
2. Install all requirements as listed in `REQUIREMENTS.txt`.
3. Install [`dice_ml`] (Note: required Python 3.6 or higher!):
`pip install dice_ml`
4. Setup an MySQL database (databse name, user name and password of your choice). Then, make sure the credentials and database in `dbmgr.py` (lines 6-10) fit your set up.
5. Run `python crypt.py` (generates key pair; relevant for encrypting userId information).
6. Decide which experiment from our study you want to recreate. The default is Experiment 1, but you can change that via the variable `expNo` in line 17 in file `BackEnd/models.py`.

### Start up the server

Finally, we can start the server: `python server.py` 
The server is listening on port **8888**, so pull up a browser and go to the Alien Fitness Hub under [localhost:8080/](localhost:8080/).

### Wrapping up, export data, clear database

When you're done, stop the running server with `Ctrl+C`.

Run `BackEnd/db_export.py` to export data from the database. This command generates 6 files from the content of the database. For details on these files and coding of respective data, see [here](???).

Finally, when you are done with the code, run 
`python BackEnd/reset_database.py user_name user_pw`
to reset the database again.

# FAQ

## I want a different port!
Fair enough: The port can be changed in line 15 in file `BackEnd/server.py`.


# License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
