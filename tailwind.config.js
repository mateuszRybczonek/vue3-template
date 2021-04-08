module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ]
    }
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}
