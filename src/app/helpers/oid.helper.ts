export class OidHelper {
  public static generateOID = (): string => {
    let objectID = require('bson-objectid');
    return objectID();
  }
}
