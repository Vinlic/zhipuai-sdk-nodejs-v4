var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// lib/core/baseApi.ts
var BaseApi = class {
  constructor(request) {
    this.request = request;
  }
  processError(err) {
    var _a, _b;
    const data = (_b = (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.data) != null ? _b : err;
    return Promise.reject(data);
  }
  get(url, params, options) {
    return __async(this, null, function* () {
      return this.request.get(url, {
        params,
        headers: options.extraHeaders,
        timeout: options.timeout,
        responseType: options.stream ? "stream" : "json"
      }).catch(this.processError);
    });
  }
  post(url, data, options) {
    return __async(this, null, function* () {
      return this.request.post(url, data, {
        headers: options.extraHeaders,
        timeout: options.timeout,
        responseType: options.stream ? "stream" : "json"
      }).catch(this.processError);
    });
  }
  postForm(url, data, options) {
    return __async(this, null, function* () {
      return this.request.postForm(url, data, {
        headers: options.extraHeaders,
        timeout: options.timeout,
        responseType: options.stream ? "stream" : "json"
      }).catch(this.processError);
    });
  }
};

// lib/capability/files.ts
var Files = class extends BaseApi {
  create(options) {
    return __async(this, null, function* () {
      const formData = new FormData();
      formData.append("purpose", options.purpose);
      formData.append("file", options.file);
      return this.postForm("/files", formData, options);
    });
  }
  findList(options) {
    return __async(this, null, function* () {
      return this.get("/files", {
        "purpose": options.purpose,
        "limit": options.limit,
        "after": options.after,
        "order": options.order
      }, options);
    });
  }
};
export {
  Files as default
};
//# sourceMappingURL=files.js.map