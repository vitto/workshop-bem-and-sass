const fs = require('fs')
const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const twig = require('metalsmith-twig')
const yaml = require('js-yaml')
const faker = require('faker')
const marked = require('marked')
const moment = require('moment')

var renderer = new marked.Renderer()

renderer.image = function (href, title, text) {
  var titleAttr = ''
  var altAttr = ''

  if (typeof text !== 'undefined') {
    altAttr = ` alt="${text}"`
    titleAttr = ` title="${text}"`
  }

  return `<img data-src="${href}" data-action="zoom"${titleAttr}${altAttr}>`
}
// console.log(marked('![This is the cover](tires-with-dirty.jpg)', { renderer: renderer }));

var m = yaml.safeLoad(fs.readFileSync('metalsmith.yml', 'utf-8'))
var images = yaml.safeLoad(fs.readFileSync('fake-images.yml', 'utf-8'))

m.twig.global = {
  faker: faker,
  images: images
}
m.markdown.renderer = renderer

metalsmith(__dirname)
    .metadata(m.metadata)
    .source(m.source)
    .destination(m.destination)
    .clean(m.clean)
    .use(markdown(m.markdown))
    .use(twig(m.twig))
    .build(function (err) {
        if (err) throw err
        console.log('Metalsmith build done successfully.')
    })
