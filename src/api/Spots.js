import Base from './Base';

var FileUploader = require('NativeModules').FileUpload;

export default class UsersApi extends Base {
    list(params) {
        return this.apiClient.get('quizwall/users', {}, params);
    }

    show(id, params) {
        return this.apiClient.get(`quizwall/users/${id}`, {}, params);
    }

    create(params, body){
        let url = this.baseUrl + `/spots`;
        debugger;
        return this.apiClient.post(url, params, body);
    }

    updateCover(spotId, file){
        debugger;
        var obj = {
            uploadUrl: this.baseUrl + `/spots/${spotId}/covers/current`,
            method: 'PUT', // default 'POST',support 'POST' and 'PUT'
            headers: {
              'Accept': 'application/json',
            },
            // fields: {
            //     'hello': 'world',
            // },
            files: [
              {
                name: 'one', // optional, if none then `filename` is used instead
                filename: 'one.w4a', // require, file name
                filepath: file.uri, // require, file absoluete path
                filetype: 'audio/x-m4a', // options, if none, will get mimetype from `filepath` extension
              },
            ]
        };

        FileUploader.upload(obj, function(err, result) {
          console.log('upload:', err, result);
          debugger;
          return result;
        })
    }

}
