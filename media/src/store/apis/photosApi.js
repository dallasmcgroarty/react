import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// dev only!
const pause = (duration) => {
  return new Promise((resolve) => {
      setTimeout(resolve, duration);
  })
};

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    fetchFn: async (...args) => {
      // remove for production
      await pause(1000);
      return fetch(...args);
    }
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: '/photos',
            params: {
              albumId: album.id
            },
            method: 'GET'
          }
        }
      }),
      addPhoto: builder.mutation({
        query: (album) => {
          return {
            method: 'POST',
            url: '/photos',
            body: {
              albumId: album.id,
              url: faker.image.url(150, 150, true),
            }
          }
        }
      }),
      removePhoto: builder.mutation({
        query: (photo) => {
          return {
            method: 'DELETE',
            url: `/photos/${photo.id}`
          }
        }
      }),
    }
  }
});

export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
export { photosApi };