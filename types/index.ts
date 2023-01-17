type thumbnailsType = {
  url: string;
  width: number;
  height: number;
};

export type articleType = {
  id: string;
  fields: {
    "Blog Image": Array<{
      id: string;
      url: string;
      thumbnails: {
        small: thumbnailsType;
        large: thumbnailsType;
        full: thumbnailsType;
      };
    }>;
    Author: string;
    tags: string[];
    Blog: string;
    Title: string;
  };
  createdTime: Date;
};
