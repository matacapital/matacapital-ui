export class NumberFormatter {
  /**
   * @example NumberFormatter.compactCurrency(3_000_000) // 3 000 000 €
   */
  public static basicCurrency(val: number, locale = "fr-FR", currency = "EUR") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val);
  }

  /**
   * @example NumberFormatter.compactCurrency(3_000_000) // 3 M €
   */
  public static compactCurrency(
    val: number,
    locale = "fr-FR",
    currency = "EUR",
  ) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      notation: "compact",
    })
      .format(val)
      .toUpperCase();
  }

  /**
   * @example NumberFormatter.compactCurrency(3_000_000) // 3 000 000
   */
  public static number(val: number, locale = "fr-FR") {
    return new Intl.NumberFormat(locale).format(val);
  }
}
