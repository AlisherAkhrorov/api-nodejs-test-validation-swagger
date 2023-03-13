const assert = require('assert');
const axios = require("axios");

describe("Positive cases", function () {
    it("List of Authorizations", async function () {
        const config = {
            method: "post",
            url: "http://localhost:5000/get_authorizations",
            data: {
                "date": "10-01-2023"
            },
        };
        const expected =
        {
            "SERNO": 10810033,
            "I003_PROC_CODE": "000000",
            "SUBSTR(LTIMESTAMP,1,9)": "10-JAN-23",
            "CAR_NUM": "1212**** ****1212",
            "I004_AMT_TRXN": 8371200,
            "I039_RSP_CD": "59 ",
            "I043C_MERCH_CNT": "UZ ",
            "I043A_MERCH_NAME": "OOO IDEA CONCEPT GROUP   ",
            "I018_MERCH_TYPE": "5999",
            "I032_ACQUIRER_ID": "434044     ",
            "I042_MERCH_ID": "010880505734601",
            "I041_POS_ID": "10119BBE"
        };

        const response = await axios(config);

        assert.strictEqual(
            JSON.stringify(response.data[0]),
            JSON.stringify(expected)
        );
        assert.strictEqual(response.status, 200);
    }).timeout(15000);

    it("List of Transactions", async function () {
        const config = {
            method: "post",
            url: "http://localhost:5000/get_transactions",
            data: {
                "startDate": "05/01/2023",
                "endDate": "09/03/2023"
            },
        };
        const expected =
        {
            "CAR_NUM": "1212**** ****1212",
            "I004_AMT_TRXN": 241841.2,
            "I013_TRXN_DATE": "2023-03-05T19:00:00.000Z",
            "I007_LOAD_DATE": "2023-03-08T19:00:00.000Z",
            "ORIG_MSG_TYPE": "05   ",
            "I043A_MERCH_NAME": "MCHJ DARVOZA SAVDO       ",
            "I032_ACQUIRER_ID": "434044     ",
            "I042_MERCH_ID": "01115002889088M",
            "I041_POS_ID": "271105M3",
            "I038_AUTH_ID": "093202",
            "I062V2_TRANS_ID": "463065303302330"
        };

        const response = await axios(config);

        assert.strictEqual(
            JSON.stringify(response.data[0]),
            JSON.stringify(expected)
        );
        assert.strictEqual(response.status, 200);
    }).timeout(15000);
});

describe("Negative cases", function () {
    it("Write day", async function () {
        const config = {
            method: "post",
            url: "http://localhost:5000/get_authorizations",
            data: {
                "date": "-01-2023"
            },
        };
        const expected =
        {
            error: "Write day"
        };

        try {
            const response = await axios(config);

        } catch (error) {
            assert.strictEqual(
                JSON.stringify(error.response.data),
                JSON.stringify(expected)
            );
            assert.strictEqual(error.response.status, 404);
        }
    }).timeout(15000);
    it("Write month", async function () {
        const config = {
            method: "post",
            url: "http://localhost:5000/get_authorizations",
            data: {
                "date": "10--2023"
            },
        };
        const expected =
        {
            "error": "Write month"
        };

        try {
            const response = await axios(config);

        } catch (error) {
            assert.strictEqual(
                JSON.stringify(error.response.data),
                JSON.stringify(expected)
            );
            assert.strictEqual(error.response.status, 404);
        }
    }).timeout(15000);
    it("Write correct day", async function () {
        const config = {
            method: "post",
            url: "http://localhost:5000/get_authorizations",
            data: {
                "date": "0-01-2023"
            },
        };
        const expected =
        {
            "error": "Write day"
        };

        try {
            const response = await axios(config);

        } catch (error) {
            assert.strictEqual(
                JSON.stringify(error.response.data),
                JSON.stringify(expected)
            );
            assert.strictEqual(error.response.status, 404);
        }
    }).timeout(15000);



    it("Write day", async function () {
        const config = {
            method: "post",
            url: "http://localhost:5000/get_transactions",
            data: {
                "startDate": "/01/2023",
                "endDate": "09/03/2023"
            },
        };
        const expected =
        {
            "error": "Write day"
        };

        try {
            const response = await axios(config);

        } catch (error) {
            assert.strictEqual(
                JSON.stringify(error.response.data),
                JSON.stringify(expected)
            );
            assert.strictEqual(error.response.status, 404);
        }
    }).timeout(15000);
    it("Write month", async function () {
        const config = {
            method: "post",
            url: "http://localhost:5000/get_transactions",
            data: {
                "startDate": "10//2023",
                "endDate": "09/03/2023"
            },
        };
        const expected =
        {
            "error": "Write month"
        };

        try {
            const response = await axios(config);

        } catch (error) {
            assert.strictEqual(
                JSON.stringify(error.response.data),
                JSON.stringify(expected)
            );
            assert.strictEqual(error.response.status, 404);
        }
    }).timeout(15000);
    it("Write correct day", async function () {
        const config = {
            method: "post",
            url: "http://localhost:5000/get_transactions",
            data: {
                "startDate": "0/01/2023",
                "endDate": "09/03/2023"
    },
        };
        const expected =
        {
            "error": "Write day"
        };

        try {
            const response = await axios(config);

        } catch (error) {
            assert.strictEqual(
                JSON.stringify(error.response.data),
                JSON.stringify(expected)
            );
            assert.strictEqual(error.response.status, 404);
        }
    }).timeout(15000);

});


