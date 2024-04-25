import { DateType, IntlParameterType } from "../mod.ts";

export class DateFormatter {
  /**
   * @example DateFormatter.short(1706633838705) // 30/01/2024
   */
  public static short(date?: DateType, locale = "fr-FR") {
    const opts: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    return DateFormatter.intl({ date, locale, opts });
  }

  /**
   * @example DateFormatter.long(1706634202050) // 30 janvier 2024
   */
  public static long(date?: DateType, locale = "fr-FR") {
    const opts: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return DateFormatter.intl({ date, locale, opts });
  }

  /**
   * @example DateFormatter.shortWithHoursAndMinutes(1706634106703) // 30/01/2024 à 18:01
   */
  public static shortWithHoursAndMinutes(date?: DateType, locale = "fr-FR") {
    const opts: Intl.DateTimeFormatOptions = {
      timeZone: "Europe/Paris",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    return DateFormatter.intl({ date, locale, opts, joinWith: " à " });
  }

  /**
   * @example DateFormatter.longWithHoursAndMinutes(1706634166361) // 30 janvier 2024 à 18:02
   */
  public static longWithHoursAndMinutes(date?: DateType, locale = "fr-FR") {
    const opts: Intl.DateTimeFormatOptions = {
      timeZone: "Europe/Paris",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    return DateFormatter.intl({ date, locale, opts });
  }

  private static intl({ date, locale, opts, joinWith }: IntlParameterType) {
    const convertedDate = DateFormatter.convert(date);

    return joinWith
      ? new Intl.DateTimeFormat(locale, opts)
          .format(convertedDate)
          .split(" ")
          .join(joinWith)
      : new Intl.DateTimeFormat(locale, opts).format(convertedDate);
  }

  private static convert(date: DateType) {
    return !date
      ? new Date()
      : typeof date !== "number"
        ? new Date(date)
        : date;
  }
}
