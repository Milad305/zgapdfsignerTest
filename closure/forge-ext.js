/** @const */
var forge = {};
forge.random = {};
/**
 * @param {number} count
 * @return {string}
 */
forge.random.getBytesSync = function(count){};

forge.util = {};
/** @constructor */
forge.util.ByteStringBuffer = function(){};
/**
 * @return {string}
 */
forge.util.ByteStringBuffer.prototype.getBytes = function(){};
/**
 * @param {string} value
 * @return {forge.util.ByteStringBuffer}
 */
forge.util.ByteStringBuffer.prototype.putBytes = function(value){};
/**
 * @param {number} i
 * @return {forge.util.ByteStringBuffer}
 */
forge.util.ByteStringBuffer.prototype.putInt16 = function(i){};
/**
 * @param {number} i
 * @return {forge.util.ByteStringBuffer}
 */
forge.util.ByteStringBuffer.prototype.putInt24Le = function(i){};
/**
 * @param {number} i
 * @return {forge.util.ByteStringBuffer}
 */
forge.util.ByteStringBuffer.prototype.putInt32Le = function(i){};
/**
 * @param {number} b
 * @param {number} n
 * @return {forge.util.ByteStringBuffer}
 */
forge.util.ByteStringBuffer.prototype.fillWithByte = function(b, n){};
/**
 * @param {number} count
 * @return {forge.util.ByteStringBuffer}
 */
forge.util.ByteStringBuffer.prototype.truncate = function(count){};
/**
 * @return {string}
 */
forge.util.ByteStringBuffer.prototype.toHex = function(){};
/** @type {string} */
forge.util.ByteStringBuffer.prototype.data;
/**
 * @param {string} input
 * @param {string=} encoding
 * @return {forge.util.ByteStringBuffer}
 */
forge.util.createBuffer = function(input, encoding){};
/**
 * @param {string} hex
 * @return {string}
 */
forge.util.hexToBytes = function(hex){};
/**
 * @param {string=} value
 * @return {string}
 */
forge.util.decodeUtf8 = function(value){};
forge.util.binary = {};
forge.util.binary.hex = {};
/**
 * @param {string} str
 * @return {Uint8Array}
 */
forge.util.binary.hex.decode = function(str){};

/** @constructor */
forge.asn1 = function(){};
/**
 * @typedef
 * {{
 *    strict: (boolean|undefined),
 *    parseAllBytes: (boolean|undefined),
 *    decodeBitStrings: (boolean|undefined),
 * }}
 */
var DerOption;
/**
 * @param {forge.util.ByteStringBuffer|string} bytes
 * @param {DerOption=} options
 * @return {forge.asn1}
 */
forge.asn1.fromDer = function(bytes, options){};
/**
 * @param {forge.asn1} obj
 * @return {forge.util.ByteStringBuffer}
 */
forge.asn1.toDer = function(obj){};
/**
 * @param {number} num
 * @return {forge.util.ByteStringBuffer}
 */
forge.asn1.integerToDer = function(num){};
/**
 * @param {string} oid
 * @return {forge.util.ByteStringBuffer}
 */
forge.asn1.oidToDer = function(oid){};
forge.asn1.Type = {};
/** @type {number} */
forge.asn1.Type.NONE;
/** @type {number} */
forge.asn1.Type.UTF8;
/** @type {number} */
forge.asn1.Type.SET;
/** @type {number} */
forge.asn1.Type.SEQUENCE;
/** @type {number} */
forge.asn1.Type.BOOLEAN;
/** @type {number} */
forge.asn1.Type.INTEGER;
/** @type {number} */
forge.asn1.Type.OID;
/** @type {number} */
forge.asn1.Type.NULL;
/** @type {number} */
forge.asn1.Type.OCTETSTRING;
/** @type {number} */
forge.asn1.Type.PRINTABLESTRING;
/** @type {number} */
forge.asn1.Type.ENUMERATED;
/** @type {number} */
forge.asn1.Type.BITSTRING;
forge.asn1.Class = {};
/** @type {number} */
forge.asn1.Class.UNIVERSAL;
/** @type {number} */
forge.asn1.Class.CONTEXT_SPECIFIC;
/**
 * @param {number} tagClass
 * @param {number} type
 * @param {boolean} constructed
 * @param {Array<forge.asn1>|forge.asn1|number|string} value
 * @param {Object=} options
 * @return {forge.asn1}
 */
forge.asn1.create = function(tagClass, type, constructed, value, options){};
/**
 * @param {forge.asn1} obj
 * @param {Object<string, *>} v
 * @param {Object<string, *>} capture
 * @param {Array<string>} errors
 */
forge.asn1.validate = function(obj, v, capture, errors){};
/** @type {Array<forge.asn1>|string} */
forge.asn1.prototype.value;
/** @type {number} */
forge.asn1.prototype.tagClass;
/** @type {number} */
forge.asn1.prototype.type;
/** @type {boolean} */
forge.asn1.prototype.constructed;

/** @constructor */
const forge_BigInteger = function(){};
/**
 * @param {forge_BigInteger} a
 * @return {number}
 */
forge_BigInteger.prototype.compareTo = function(a){};
/** @constructor */
const forge_cert = function(){};
/** @type {forge_key} */
forge_cert.prototype.publicKey;
/** @type {forge_cert_issuer} */
forge_cert.prototype.issuer;
/** @type {string} */
forge_cert.prototype.serialNumber;
/** @type {forge_cert_issuer} */
forge_cert.prototype.subject;
/**
 * @param {forge_cert} parent
 * @return {boolean}
 */
forge_cert.prototype.isIssuer = function(parent){};
/**
 * @param {string|forge_cert_extension} nm
 * @return {forge_cert_extension}
 */
forge_cert.prototype.getExtension = function(nm){};
/** @constructor */
const forge_key = function(){};
/** @type {forge_BigInteger} */
forge_key.prototype.n;
/** @type {forge_BigInteger} */
forge_key.prototype.e;
/** @constructor */
const forge_cert_issuer = function(){};
/** @type {Array<forge_cert_attr>} */
forge_cert_issuer.prototype.attributes;
/**
 * @param {string} sn
 * @return {forge.asn1}
 */
forge_cert_issuer.prototype.getField = function(sn){};
/**
 * @typedef
 * {{
 *    id: (string|undefined),
 *    name: (string|undefined),
 *    critical: (boolean|undefined),
 *    value: (string|undefined),
 *    cA: (boolean|undefined),
 * }}
 */
var forge_cert_extension;

/**
 * @typedef
 * {{
 *    valueTagClass: (number|undefined),
 *    type: (string|undefined),
 *    value: (string|undefined),
 * }}
 */
var forge_cert_attr;
/**
 * @typedef
 * {{
 *    key: (forge_key|undefined),
 *    certificate: (forge_cert|undefined),
 *    digestAlgorithm: (string|undefined),
 *    authenticatedAttributes: (Array<forge_cert_attr>|undefined),
 *    unauthenticatedAttributes: (Array<forge_cert_attr>|undefined),
 *    signature: (string|undefined),
 * }}
 */
var forge_signer;

/** @constructor */
forge.pkcs7 = function(){};
/**
 * @return {forge.pkcs7}
 */
forge.pkcs7.createSignedData = function(){};
/**
 * @return {forge.pkcs7}
 */
forge.pkcs7.createEnvelopedData = function(){};
/**
 * @param {forge_cert} cert
 */
forge.pkcs7.prototype.addCertificate = function(cert){};
/**
 * @param {forge_signer} signer
 */
forge.pkcs7.prototype.addSigner = function(signer){};
/** @type {Array<forge_signer>} */
forge.pkcs7.prototype.signers;
/** @type {Array<forge.asn1>} */
forge.pkcs7.prototype.signerInfos;
/**
 * @param {forge_cert} cert
 */
forge.pkcs7.prototype.addRecipient = function(cert){};
/** @type {forge.util.ByteStringBuffer} */
forge.pkcs7.prototype.content;
/**
 * @param {forge.util.ByteStringBuffer=} key
 * @param {string=} cipher
 */
forge.pkcs7.prototype.encrypt = function(key, cipher){};
/**
 * @typedef
 * {{
 *    detached: (boolean|undefined),
 * }}
 */
var forge_sign_option;
/**
 * @param {forge_sign_option} options
 */
forge.pkcs7.prototype.sign = function(options){};
/**
 * @return {forge.asn1}
 */
forge.pkcs7.prototype.toAsn1 = function(){};

/** @constructor */
forge.pkcs12 = function(){};
/**
 * @param {forge.asn1} obj
 * @param {boolean=} strict
 * @param {string=} password
 * @return {forge.pkcs12}
 */
forge.pkcs12.pkcs12FromAsn1 = function(obj, strict, password){};
/**
 * @typedef
 * {{
 *    localKeyId: (string|undefined),
 *    localKeyIdHex: (string|undefined),
 *    friendlyName: (string|undefined),
 *    bagType: (string|undefined),
 * }}
 */
var P12BagsFilter;
/**
 * @typedef
 * {{
 *    cert: forge_cert,
 *    key: forge_key,
 * }}
 */
var P12Bag;
/**
 * @param {P12BagsFilter} filter
 * @return {Object<string, Object<string|number, P12Bag>>}
 */
forge.pkcs12.prototype.getBags = function(filter){};

forge.pki = {};
forge.pki.oids = {};
/** @type {string} */
forge.pki.oids.certBag;
/** @type {string} */
forge.pki.oids.pkcs8ShroudedKeyBag;
/** @type {string} */
forge.pki.oids.sha1;
/** @type {string} */
forge.pki.oids.sha256;
/** @type {string} */
forge.pki.oids.contentType;
/** @type {string} */
forge.pki.oids.data;
/** @type {string} */
forge.pki.oids.messageDigest;
/** @type {string} */
forge.pki.oids.signingTime;
/** @type {string} */
forge.pki.oids.rsaEncryption;
/** @type {string} */
forge.pki.oids.sha256WithRSAEncryption;
/** @type {string} */
forge.pki.oids.commonName;
/** @lends {forge.pki.oids} */
forge.oids = forge.pki.oids;
/**
 * @param {forge.asn1} obj
 * @param {boolean=} computeHash
 * @return {forge_cert}
 */
forge.pki.certificateFromAsn1 = function(obj, computeHash){};
/**
 * @param {forge_cert} cert
 * @return {forge.asn1}
 */
forge.pki.certificateToAsn1 = function(cert){};
/**
 * @param {forge_cert_issuer} obj
 * @return {forge.asn1}
 */
forge.pki.distinguishedNameToAsn1 = function(obj){};
/**
 * @param {forge_key} key
 * @return {forge.asn1}
 */
forge.pki.publicKeyToRSAPublicKey = function(key){};

forge.md = {};
/** @constructor */
forge.md.digest = function(){};
/**
 * @param {string=} msg
 * @param {string=} encoding
 * @return {forge.md.digest}
 */
forge.md.digest.prototype.update = function(msg, encoding){};
/**
 * @return {forge.util.ByteStringBuffer}
 */
forge.md.digest.prototype.digest = function(){};
forge.md.md5 = {};
forge.md.sha1 = {};
forge.md.sha256 = {};
/**
 * @return {forge.md.digest}
 */
forge.md.md5.create = function(){};
/**
 * @return {forge.md.digest}
 */
forge.md.sha1.create = function(){};
/**
 * @return {forge.md.digest}
 */
forge.md.sha256.create = function(){};

forge.cipher = {};
/** @constructor */
forge.cipher.BlockCipher = function(){};
/**
 * @typedef
 * {{
 *    iv: (string|undefined),
 *    additionalData: (string|undefined),
 *    tagLength: (number|undefined),
 *    tag: (string|undefined),
 *    output: (forge.util.ByteStringBuffer|undefined),
 * }}
 */
var CipherOptions;
/**
 * @param {CipherOptions} options
 */
forge.cipher.BlockCipher.prototype.start = function(options){};
/**
 * @param {forge.util.ByteStringBuffer} input
 */
forge.cipher.BlockCipher.prototype.update = function(input){};
/**
 * @return {boolean}
 */
forge.cipher.BlockCipher.prototype.finish = function(){};
/** @type {forge.util.ByteStringBuffer} */
forge.cipher.BlockCipher.prototype.output;
/**
 * @param {string} algorithm
 * @param {forge.util.ByteStringBuffer} key
 * @return {forge.cipher.BlockCipher}
 */
forge.cipher.createCipher = function(algorithm, key) {};
