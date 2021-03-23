const AWS = require("aws-sdk");



module.exports = () => {
    AWS.config.update({
        accessKeyId: 'AKIA53DDMX5YBG4OUAMF',
        secretAccessKey: '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',
        region: 'us-east-2',
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
        console.log(`SNS subscription set up successfully: ${JSON.stringify(data)}`);
    });

    sns.subscribe(paramsTopicComplaints, function (error, data) {
        if (error) throw new Error(`Unable to set up SNS subscription: ${error}`);
        console.log(`SNS subscription set up successfully: ${JSON.stringify(data)}`);
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
                    accessKeyId: 'AKIA53DDMX5YBG4OUAMF',
                    secretAccessKey: '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',
                    region: 'us-east-2',
                };
                // let params = {
                //     Destination: { /* required */
                //         CcAddresses: [

                //         ],
                //         ToAddresses: [
                //             PERSONAL_EMAIL_ID,
                //             /* more items */
                //         ]
                //     },
                //     Message: { /* required */
                //         Body: { /* required */
                //             Html: {
                //                 Charset: "UTF-8",
                //                 Data: "HTML_FORMAT_BODY"
                //             },
                //             Text: {
                //                 Charset: "UTF-8",
                //                 Data: "TEXT_FORMAT_BODY"
                //             }
                //         },
                //         Subject: {
                //             Charset: 'UTF-8',
                //             Data: 'Test email'
                //         }
                //     },
                //     Source: 'daraksha@steppingcloud.com', /* required */
                //     ReplyToAddresses: [

                //     ],
                // };
                var thisApp = JSON.parse(process.env.VCAP_APPLICATION);
                console.log(thisApp)
                let params = {
                    Source: 'daraksha@steppingcloud.com',
                    Template: 'WelcomeMail',
                    Destination: {
                        ToAddresses: [PERSONAL_EMAIL_ID]
                    },
                    TemplateData: JSON.stringify({ name: FIRST_NAME_PERSONAL_INFORMATION, link: URL })
                };

                let sendPromise = new AWS.SES(SES_CONFIG).sendTemplatedEmail(params).promise();
                resolve(sendPromise);

            } catch (error) {
                reject(error);
            }
        });
    }

    return {
        handleResponse,
        handleSnsNotification,
        sendEmail
    }
}