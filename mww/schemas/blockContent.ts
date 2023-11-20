import {FaSuperscript, FaSubscript} from 'react-icons/fa'
// import {TbLetterCaseLower} from 'react-icons/tb'
import {BsCodeSlash} from 'react-icons/bs'

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'},
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
          {title: 'Code', value: 'code', icon: BsCodeSlash},
          {title: 'Superscript', value: 'sup', icon: FaSuperscript},
          {title: 'Subscript', value: 'sub', icon: FaSubscript},
          {title: 'Small', value: 'small', icon: FaSubscript},
        ],
      },
    },
    {
      type: 'image',
    },
    {
      type: 'code',
      name: 'code',
      title: 'Code Highlighting',
      options: {
        language: 'javascript',
        languageAlternatives: [
          {title: 'TSX', value: 'tsx'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'Javascript', value: 'javascript'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'JSON', value: 'json'},
          {title: 'YAML', value: 'yaml'},
        ],
        withFilename: true,
        theme: 'monokai',
      },
    },
  ],
}