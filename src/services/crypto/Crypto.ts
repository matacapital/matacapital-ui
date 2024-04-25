export class Crypto {
  /**
   * @summary
   * Creates a string hash by running those steps.
   * 1 - Encode message as (utf-8) Uint8Array.
   * 2 - Hash it and get a buffer.
   * 3 - Then, convert buffer into a byte array.
   * 4 - Finally returns the array converted into hex string.
   * @param message
   */
  public static async digestMessage(message: string) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-1", msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
}
