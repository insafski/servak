var { default: parseJwk } = require("jose/jwk/parse");
var { default: SignJWT } = require("jose/jwt/sign");

var jwt = async function () {
    const t = await parseJwk({
        alg: "ES256",
        crv: "P-256",
        kty: "EC",
        d: "VhsfgSRKcvHCGpLyygMbO_YpXc7bVKwi12KQTE4yOR4",
        x: "ySK38C1jBdLwDsNWKzzBHqKYEE5Cgv-qjWvorUXk9fw",
        y: "_LeQBw07cf5t57Iavn4j-BqJsAD1dpoz8gokd3sBsOo",
    });

    return await new SignJWT({ "urn:example:claim": true })
        .setProtectedHeader({ alg: "ES256" })
        .setIssuedAt()
        // .setIssuer("urn:example:issuer")
        // .setAudience("urn:example:audience")
        .setSubject({
            user: 12,
        })
        .setExpirationTime("2h")
        .sign(t);
};

module.exports = jwt;
