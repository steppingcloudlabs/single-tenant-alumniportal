const objectStoreSerice = require("./objectstore");
const JobSchedulerClient = require('@sap/jobs-client');
const xsenv = require("@sap/xsenv");

module.exports = () => {
    const createExtractionJob = () => {
        return new Promise(async (resolve, reject) => {
            try {
                let action = payload.payload.action;
                // creating a onetime job for this upload.
                var jobOptions = xsenv.getServices({
                    jobs: {
                        tag: "jobscheduler"
                    }
                });
                var schedulerOptions = {
                    baseURL: jobOptions.jobs.url,
                    user: jobOptions.jobs.user,
                    password: jobOptions.jobs.password,
                    timeout: 15000
                };
                var scheduler = new jobsc.Scheduler(schedulerOptions);
                var thisApp = JSON.parse(process.env.VCAP_APPLICATION);
                var thisAppURI = thisApp.full_application_uris[0];
                let myJob = {
                    job: {
                        "name": "myJob",
                        "description": "Perform my action",
                        "action": thisAppURI + "/integration/document/objectstore/etl",
                        "active": true,
                        "httpMethod": "POST",
                        "schedules": [{
                            "description": "This will run once",
                            "time": "1 minutes from now",
                            "data": {},
                            "active": true
                        }]
                    }
                }
                scheduler.createJob(myJob, (error, body) => {
                    if (error) reject(error);
                    else {
                        resolve(body._id);
                    }
                });


            } catch (error) {
                reject(error)
            }
        })
    }

    const getAllJobs = () => {
        return new Promise(async (resolve, reject) => {
            try {
                let action = payload.payload.action;
                // creating a onetime job for this upload.
                var jobOptions = xsenv.getServices({
                    jobs: {
                        tag: "jobscheduler"
                    }
                });
                var schedulerOptions = {
                    baseURL: jobOptions.jobs.url,
                    user: jobOptions.jobs.user,
                    password: jobOptions.jobs.password,
                    timeout: 15000
                };
                var scheduler = new jobsc.Scheduler(schedulerOptions);
                var req = {};

                scheduler.fetchAllJobs(req, (error, body) => {
                    if (error) reject(error);
                    else {
                        resolve(body);
                    }
                });


            } catch (error) {
                reject(error)
            }
        })
    }


    const createCleanObjectStoreJob = () => {
        return new Promise(async (resolve, reject) => {
            try {
                let condition = false;
                if (condition) {
                    resolve('data')
                } else {
                    reject('error')
                }
            } catch (error) {
                reject(error)
            }
        })
    }

    const getJobLogs = ({ payload }) => {
        return new Promise(async (resolve, reject) => {
            var jobOptions = xsenv.getServices({
                jobs: {
                    tag: "jobscheduler"
                }
            });
            var schedulerOptions = {
                baseURL: jobOptions.jobs.url,
                user: jobOptions.jobs.user,
                password: jobOptions.jobs.password,
                timeout: 15000
            };
            var scheduler = new jobsc.Scheduler(schedulerOptions);

            scheduler.getJobActionLogs(payload.id, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
                //All actionlogs logs retrieved successfully
            });
        })

    }

    return {
        createExtractionJob,
        getAllJobs,
        createCleanObjectStoreJob,
        getJobLogs
    }
}