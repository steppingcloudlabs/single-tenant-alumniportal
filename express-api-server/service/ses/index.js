const AWS = require("aws-sdk");

module.exports = () => {
    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-2',
        signatureVersion: 'v4'
    });

    const sns = new AWS.SNS();
    let endpoint = JSON.parse(process.env.VCAP_APPLICATION).uris[0];

    const topicArnBounce =
        "arn:aws:sns:us-east-2:951543709552:ses-bounces-topic-prod";
    var paramsTopicBounces = {
        Protocol: "https",
        TopicArn: topicArnBounce,
        Endpoint: "https://" + endpoint + "/aws/sns/handle-bounces"
    };

    const topicArnComplaint =
        "arn:aws:sns:us-east-2:951543709552:ses-bounces-topic-prod";
    var paramsTopicComplaints = {
        Protocol: "https",
        TopicArn: topicArnComplaint,
        Endpoint: "https://" + endpoint + "/aws/sns/handle-complaints"
    };

    sns.subscribe(paramsTopicBounces, function (error, data) {
        if (error) throw new Error(`Unable to set up SNS subscription: ${error}`);

    });

    sns.subscribe(paramsTopicComplaints, function (error, data) {
        if (error) throw new Error(`Unable to set up SNS subscription: ${error}`);

    });

    const handleResponse = async (topicArn, req, res) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve("Need to be implemented")
            } catch (error) {
                reject(error)
            }
        })

    };
    const handleSnsNotification = async (req, res) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve("Need to be implemented")
            } catch (error) {
                reject(error)
            }
        })
    };

    const sendEmail = async ({ PERSONAL_EMAIL_ID, FIRST_NAME_PERSONAL_INFORMATION, URL }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const SES_CONFIG = {
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                    region: 'us-east-2'
                };
                let params = {
                    Destination: { /* required */
                        CcAddresses: [

                        ],
                        ToAddresses: [
                            PERSONAL_EMAIL_ID,
                            /* more items */
                        ]
                    },
                    Message: { /* required */
                        Body: { /* required */
                            Html: {
                                Charset: "UTF-8",
                                Data: "HTML_FORMAT_BODY"
                            },
                            Text: {
                                Charset: "UTF-8",
                                Data: "TEXT_FORMAT_BODY"
                            }
                        },
                        Subject: {
                            Charset: 'UTF-8',
                            Data: 'Test email'
                        }
                    },
                    Source: 'daraksha@steppingcloud.com', /* required */
                    ReplyToAddresses: [

                    ],
                };

                let endpoint = JSON.parse(process.env.VCAP_APPLICATION).uris[0];
                endpoint = endpoint.replace('-srv', "");
                console.log(endpoint)
                let paramsTemplate = {
                    Source: 'daraksha@steppingcloud.com',
                    Template: 'WelcomeMail',
                    Destination: {
                        ToAddresses: [PERSONAL_EMAIL_ID]
                    },
                    TemplateData: JSON.stringify({ name: FIRST_NAME_PERSONAL_INFORMATION, link: 'https://' + endpoint + '/index.html#/signup' })
                };

                // console.log(paramsTemplate)
                // let sendPromise = new AWS.SES(SES_CONFIG).sendEmail(params).promise();
                sendPromise = new AWS.SES(SES_CONFIG).sendTemplatedEmail(paramsTemplate).promise();
                resolve(sendPromise);

            } catch (error) {
                reject(error);
            }
        });
    }


    const sendForgetPasswordEmail = async ({ EMAIL, FIRST_NAME_PERSONAL_INFORMATION, token }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const SES_CONFIG = {
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                    region: 'us-east-2'
                };
                let params = {
                    Destination: { /* required */
                        CcAddresses: [

                        ],
                        ToAddresses: [
                            EMAIL,
                            /* more items */
                        ]
                    },
                    Message: { /* required */
                        Body: { /* required */
                            Html: {
                                Charset: "UTF-8",
                                Data: "HTML_FORMAT_BODY"
                            },
                            Text: {
                                Charset: "UTF-8",
                                Data: "TEXT_FORMAT_BODY"
                            }
                        },
                        Subject: {
                            Charset: 'UTF-8',
                            Data: 'Test email'
                        }
                    },
                    Source: 'daraksha@steppingcloud.com', /* required */
                    ReplyToAddresses: [

                    ],
                };

                let endpoint = JSON.parse(process.env.VCAP_APPLICATION).uris[0];
                endpoint = endpoint.replace('-srv', "");
                console.log(EMAIL)
                let paramsTemplate = {
                    Source: 'daraksha@steppingcloud.com',
                    Template: 'WelcomeMail',
                    Destination: {
                        ToAddresses: [EMAIL]
                    },
                    TemplateData: JSON.stringify({ name: FIRST_NAME_PERSONAL_INFORMATION, link: 'https://' + endpoint + `/#/resetpassword/${token}` })
                };

                // console.log(paramsTemplate)
                // let sendPromise = new AWS.SES(SES_CONFIG).sendEmail(params).promise();
                sendPromise = new AWS.SES(SES_CONFIG).sendTemplatedEmail(paramsTemplate).promise();
                resolve(sendPromise);

            } catch (error) {
                reject(error);
            }
        });
    }

    const sendEmailAdmin = async ({ email, firstname, password ,URL }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const SES_CONFIG = {
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                    region: 'us-east-2'
                };
                let params = {
                    Destination: { /* required */
                        CcAddresses: [

                        ],
                        ToAddresses: [
                            email,
                            /* more items */
                        ]
                    },
                    Message: { /* required */
                        Body: { /* required */
                            Html: {
                                Charset: "UTF-8",
                                Data: "HTML_FORMAT_BODY"
                            },
                            Text: {
                                Charset: "UTF-8",
                                Data: "TEXT_FORMAT_BODY"
                            }
                        },
                        Subject: {
                            Charset: 'UTF-8',
                            Data: 'Test email'
                        }
                    },
                    Source: 'daraksha@steppingcloud.com', /* required */
                    ReplyToAddresses: [

                    ],
                };

                let endpoint = JSON.parse(process.env.VCAP_APPLICATION).uris[0];
                endpoint = endpoint.replace('-srv', "");
                console.log(endpoint)
                let paramsTemplate = {
                    Source: 'daraksha@steppingcloud.com',
                    Template: 'WelcomeAdminMail',
                    Destination: {
                        ToAddresses: [email]
                    },
                    TemplateData: JSON.stringify({ name: firstname, username: email, password: password, link: 'https://' + endpoint + '/index.html#/login' })
                };


                console.log(paramsTemplate)
                // let sendPromise = new AWS.SES(SES_CONFIG).sendEmail(params).promise();
                sendPromise = new AWS.SES(SES_CONFIG).sendTemplatedEmail(paramsTemplate).promise();
                resolve(sendPromise);

            } catch (error) {
                reject(error);
            }
        });
    }



    return {
        handleResponse,
        handleSnsNotification,
        sendEmail,
        sendForgetPasswordEmail,
        sendEmailAdmin
    }
}