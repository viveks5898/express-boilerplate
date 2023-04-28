class customError extends Error {
  constructor (status, message){
    super()
    this.status = status;
    this.message =message;

  }
  static alreadyExist(message) {
    return new customError(409, message);
}
static wrongCredentials(message) {
    return new customError(422, message);
}
static unauthorise(message) {
    return new customError(401, message);
}
static invalidToken(message) {
    return new customError(401, message);
}
}

export default customError;  

