"use strict";

class AlienZooApi {
    userId = undefined;
    controlGroup = undefined;
    paymentId = undefined;

    logRandomFeedback(trialCount, blockCount, randFeedbackIndices) {
        const data = {
            "userId": this.userId,
            "trialCount": trialCount,
            "blockCount": blockCount,
            "randFeedbackIndices": randFeedbackIndices
        };

        return new Promise(resolve => {
            fetch("/api/log/randomFeedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                resolve(true);
            })
            .catch((error) => {
                console.error(error);

                resolve(false);
            });
        });
    }

    logUserPerformance(trialCount, blockCount, plants, cfPlants, oldpred, newpred) {
        const data = {
            "userId": this.userId,
            "trialCount": trialCount,
            "blockCount": blockCount,
            "plants": plants,
            "cfPlants": cfPlants,
            "old_pred": oldpred,
            "new_pred": newpred
        };

        return new Promise(resolve => {
            fetch("/api/log/userPerformance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                resolve(true);
            })
            .catch((error) => {
                console.error(error);

                resolve(false);
            });
        });
    }

    logDemographics(itemAgeVar1Checked, itemAgeVar2Checked, itemAgeVar3Checked, itemAgeVar4Checked, itemAgeVar5Checked, itemAgeVar6Checked, itemAgeVar7Checked, itemGenderVar1Checked, itemGenderVar2Checked, itemGenderVar3Checked, itemGenderVar4Checked, itemGenderVar5Checked, itemGenderVar6Checked, itemEngVar1Checked, itemEngVar2Checked, itemEngVar3Checked, itemEngVar4Checked, itemEngVar5Checked, itemEngVar6Checked, itemEngVar7Checked) {
        const data = {
            "userId": this.userId,
            "questionId": -1,
            "checkboxValues": [itemAgeVar1Checked, itemAgeVar2Checked, itemAgeVar3Checked, itemAgeVar4Checked, itemAgeVar5Checked, itemAgeVar6Checked, itemAgeVar7Checked,
                itemGenderVar1Checked, itemGenderVar2Checked, itemGenderVar3Checked, itemGenderVar4Checked, itemGenderVar5Checked, itemGenderVar6Checked, //itemGenderVar7Checked, 
                itemEngVar1Checked, itemEngVar2Checked, itemEngVar3Checked, itemEngVar4Checked, itemEngVar5Checked, itemEngVar6Checked, itemEngVar7Checked]
        };

        return new Promise(resolve => {
            fetch("/api/log/questionnaireAnswer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                resolve(true);
            })
            .catch((error) => {
                console.error(error);

                resolve(false);
            });
        });
    }

    logQuestionnaire(questionId, checkboxVar1, checkboxVar2, checkboxVar3, checkboxVar4, checkboxVar5, checkboxVar6,) {
        const data = {
            "userId": this.userId,
            "questionId": questionId,
            "checkboxValues": [checkboxVar1, checkboxVar2, checkboxVar3, checkboxVar4, checkboxVar5, checkboxVar6]
        };

        return new Promise(resolve => {
            fetch("/api/log/questionnaireAnswer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                resolve(true);
            })
            .catch((error) => {
                console.error(error);

                resolve(false);
            });
        });
    }

    logTime(eventId, timeElapsed, blockNo=undefined, trialNo=undefined) {
        const data = {
            "userId": this.userId,
            "eventId": eventId,
            "timeElapsed": timeElapsed,
            "blockNo": blockNo == undefined ? -1 : blockNo,
            "trialNo": trialNo == undefined ? -1 : trialNo 
        };

        return new Promise(resolve => {
            fetch("/api/log/elapsedTime", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                resolve(true);
            })
            .catch((error) => {
                console.error(error);

                resolve(false);
            });
        });
    }

    logAttention(userPrediction, trialCount, shub_health) {
        const data = {
            "userId": this.userId,
            "userPrediction": userPrediction,
            "trialCount": trialCount,
            "shub_health": shub_health
        };

        return new Promise(resolve => {
            fetch("/api/log/attention", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                resolve(true);
            })
            .catch((error) => {
                console.error(error);

                resolve(false);
            });
        });
    }

    logHelp(helpCount, blockCount, shub_health, budget) {
        const data = {
            "userId": this.userId,
            "helpCount": helpCount,
            "planetNo": blockCount,
            "shub_health": shub_health,
            "budget": budget
        };

        return new Promise(resolve => {
            fetch("/api/log/loghelp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                resolve(true);
            })
            .catch((error) => {
                console.error(error);

                resolve(false);
            });
        });
    }

    generatePaymentId() {
        var paymentIdLengt = 6; // Length of payment identifier
        var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        var paymentId = "";
        for (var i=0; i < paymentIdLengt; i++) {
            paymentId += abc.charAt(Math.floor(Math.random() * abc.length));
        }

        return paymentId;
    }

    gameStart() {
        return new Promise(resolve => {
            fetch("/api/gameStart", {
                method: "POST"
            }).then(r => r.json())
            .then(jsonData => {
                this.userId = jsonData.userId;
                this.controlGroup = jsonData.controlGroup;
                this.paymentId = this.generatePaymentId()
                jsonData.state = true
                resolve(jsonData);
            })
            .catch((error) => {
                console.error(error);

                resolve(false);
            });
        });
    }

    logUserPayment() {
        const data = {
            "userId": this.userId,
            "paymentId": this.paymentId   // Will be encrypted on the server!
        };

        return new Promise(resolve => {
            fetch("/api/log/userPayment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                resolve(true);
            })
            .catch((error) => {
                console.error(error);

                resolve(false);
            });
        });
    }
    // replaced numShubs=cur_pred
    computeNewShubNo(gameData) {
        const cur_pred = gameData.newNumber
        return new Promise(resolve => {
            const data = {
                        "userId": this.userId,
                        "cur_pred": 0,
                        "trialCount": gameData.trialCount, //attempts/trialCount
                        "blockCount": gameData.testno, //test no from blockcount
                        "inputVars": {
                            "Var1": gameData.clickCountVar1,
                            "Var3": gameData.clickCountVar3,
                            "Var2": gameData.clickCountVar2,
                            "Var4": gameData.clickCountVar4,
                            "Var5": gameData.clickCountVar5
                        }
            };

            fetch("/api/predictNewShubNo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(r => r.json())
            .then(jsonData => {
                resolve({
                    "cur_pred": jsonData.cur_pred,
                    "counterfactualCountVars": jsonData.counterfactualCountVars,
                    "diffCountVars": jsonData.diffCountVars
                });
            })
            .catch((error) => {
                console.error(error);

                resolve(undefined);
            });
        });
    }



    creteBorderBox(x, y, width, height, add, borderWidth = 4, borderColor = 0x000000){
        var graphics = add.graphics();
        // Draw the box with border
        graphics.lineStyle(borderWidth, borderColor);
        graphics.strokeRect(x - borderWidth / 2, y - borderWidth / 2, width + borderWidth, height + borderWidth);
    
        // Fill the box with a color
        graphics.fillStyle(0x000000, 0); // Box color (Transparent in this case)
        graphics.fillRect(x, y, width, height);
    }

};
