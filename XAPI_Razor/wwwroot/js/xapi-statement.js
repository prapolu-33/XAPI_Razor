function sendStatement( Name, Email, verb, verbId, object, objectId) {
        const conf = {
            "endpoint": "https://localhost:7271/api/xapi/",
            "auth": "Basic " + toBase64("prapolu:password")
        }
    ADL.XAPIWrapper.changeConfig(conf);
    const statement = {
        "actor": {
            "name": Name,
            "mbox": "mailto:" + Email
        },

        "verb": {
            "id": verbId,
            "display": {
                "en-us": verb
            }
        },

        "object": {
            "id": objectId,
            "definition": {
                "name": { "en-us": object },
                "type": "http://adlnet.gov/expapi/activities/interaction",
                "description": { "en-us": "This is a description for an xapi object!" }
            }
        }
    }
    const result = ADL.XAPIWrapper.sendStatement(statement);
}
