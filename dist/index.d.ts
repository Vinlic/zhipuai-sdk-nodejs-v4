export { default as ZhipuAI, default } from './zhipu-ai.js';
export { default as Completions } from './capability/completions.js';
export { default as Images } from './capability/images.js';
export { default as Embeddings } from './capability/embeddings.js';
import './core/request.js';
import 'axios';
import './types/completions.js';
import './types/baseApi.js';
import './types/images.js';
import './types/embeddings.js';
import './types/files.js';
import './capability/files.js';
import './core/baseApi.js';
