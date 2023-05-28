import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IArticleFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Publish date */
  publishDate: string;

  /** body */
  body: Document;

  /** thumbnail */
  thumbnail: string;

  /** category */
  category: string;
}
