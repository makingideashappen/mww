import {RiArticleLine} from 'react-icons/ri'

export default {
  name: 'post',
  title: 'Articles',
  type: 'document',
  icon: RiArticleLine,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL path',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule: any) => Rule.required().error('A published date is required'),
      options: {
        dateFormat: 'DD.MM.YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'readMore',
      title: 'Read more text',
      type: 'string',
    },
    {
      name: 'content',
      type: 'blockContent',
      title: 'Content',
    },
  ],
}