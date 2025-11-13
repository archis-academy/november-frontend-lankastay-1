// 'module.exports =' yerine 'export default' yazıyoruz
export default {
  // --- Temel Formatlama ---

  /**
   * Satırın maksimum uzunluğu.
   */
  printWidth: 100,

  /**
   * Girinti (indentation) için kaç boşluk kullanılacağı.
   */
  tabWidth: 2,

  /**
   * Girintiler için tab karakteri yerine boşluk karakteri kullan.
   */
  useTabs: false,

  // --- Tırnaklar ve Noktalı Virgüller ---

  /**
   * Satır sonlarına noktalı virgül (;) ekle.
   */
  semi: true,

  /**
   * (Senin tercihin) Çift tırnak (") yerine tek tırnak (') kullan.
   */
  singleQuote: true,

  /**
   * (Öneri) JSX içinde de (singleQuote ayarına uygun olarak) tek tırnak kullan.
   */
  jsxSingleQuote: true,

  // --- Kod Okunabilirliği ---

  /**
   * Obje literallerinde parantez ile içerik arasında boşluk bırak:
   */
  bracketSpacing: true,

  /**
   * Arrow fonksiyonlarında tek bir parametre olsa bile parantez kullan.
   */
  arrowParens: 'always',

  // --- Kapanış Etiketleri ve Virgüller ---

  /**
   * (Senin tercihin) Obje, array vb. yapılarda son elemandan sonra da virgül bırak.
   */
  trailingComma: 'es5',

  /**
   * Çok satırlı JSX elementlerinde kapanış '>' karakterini bir alt satıra al.
   */
  bracketSameLine: false,

  // --- Çapraz Platform Uyumluluğu ---

  /**
   * Satır sonu karakterlerini (End of Line) belirler.
   */
  endOfLine: 'lf',
};