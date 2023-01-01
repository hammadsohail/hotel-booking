export default {
    name: 'location',
    title: 'location',
    type: 'document',
    fields: [


      {
        name: 'title',
        title: 'title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 90,
        }
      },

      {
        name: 'description',
        title: 'description',
        type: 'string',
      },
      {
        name: 'projectby',
        title: 'projectby',
        type: 'string',
      },
      {
        name: 'location',
        title: 'location',
        type: 'string',
      },
      {
        name: 'address',
        title: 'address',
        type: 'string',
      },
      {
        name: 'area',
        title: 'area',
        type: 'string',
      },
      {
        name: 'price',
        title: 'price',
        type: 'number',
      },
      {
        name: 'total',
        title: 'total',
        type: 'number',
      },
      {
        name: 'long',
        title: 'long',
        type: 'number',
      },
      {
        name: 'lat',
        title: 'lat',
        type: 'number',
      },
      {
        name: 'star',
        title: 'star',
        type: 'number',
      },
      {
        name: 'img',
        title: 'img',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      }
    ]
  }