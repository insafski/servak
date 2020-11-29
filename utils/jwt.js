const { default: parseJwk } = require("jose/jwk/parse");
const { default: SignJWT } = require("jose/jwt/sign");

const { JWT_SECRET_D, JWT_SECRET_X, JWT_SECRET_Y } = require("../configs/envs");

const jwt = async (user) => {
    const t = await parseJwk({
        alg: "ES256",
        crv: "P-256",
        kty: "EC",
        d: JWT_SECRET_D,
        x: JWT_SECRET_X,
        y: JWT_SECRET_Y,
    });

    return await new SignJWT({ "urn:example:claim": true })
        .setProtectedHeader({ alg: "ES256" })
        .setIssuedAt()
        // .setIssuer("urn:example:issuer")
        // .setAudience("urn:example:audience")
        .setSubject({
            user,
        })
        .setExpirationTime("2h")
        .sign(t);
};

module.exports = jwt;
