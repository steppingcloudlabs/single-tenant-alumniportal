module.exports = () => {
    const createETLJob = ({ payload }) => {
        return new Promise(async (resolve, reject) => {
            try {
                let action = payload.payload.filename;
                // creating a onetime job for this upload.
                // var jobOptions = xsenv.getServices({
                //     jobs: {
                //         tag: "jobscheduler"
                //     }
                // });
                var schedulerOptions = {
                    baseURL: "https://jobscheduler-rest.cfapps.us10.hana.ondemand.com",
                    user: "sbss_fdxu8hkahvoyqybrvpge+njo+l46zwz8pemmexwnmim/bltdfdayarlkp9abftjbnjs=",
                    password: "aa_6wO1dHeAJYeoyzkMJ10P8qdC2hc=",
                    timeout: 15000
                };
                var scheduler = new jobsc.Scheduler(schedulerOptions);
                var thisAppURI = JSON.parse(process.env.VCAP_APPLICATION).uris[0];
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
                            "data": {
                                "payload": {
                                    "key": action
                                }
                            },
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
        createETLJob,
        getAllJobs,
        createCleanObjectStoreJob,
        getJobLogs
    }
}