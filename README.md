# S3 uploader tool for Restaurant Awards
This tool can be use to upload a batch of images to S3 instead of doing it with in the browser which I know, can be time consuming.

## Requirements
All you need is node to run npm or yarn, and the access keys to S3.

## How to use
Just clone or download this repo into your local computer. cd into the folder once that's done ``` cd S3-uploader-tool-for-RA ```. Now install its dependencies by running ``` npm install ```. 

Once this repo dependencies are installed create a json file and name it as ```aws-keys.json``` in the root folder. Now add S3 credentials in it (see sample below.)

```
{
    "AWSAccessKeyId": "AKxxxxxxxxxx",
    "AWSSecretKey": "super-secret-key",
    "AWSBucket": "The-bucket-name",
    "AWSRegion":"AWS-Region"
  }
```

Once you have the file in place in the root of your folder, create a folder and named images ``` images/ ``` and dump all images that you want to upload in it. And finally just run ``` npm run s3```. That should take few seconds or minutes depending how many files are in the images folder.

So there you go, all files should be in the Restaurant forlder at S3, check S3 in you browser to confirm.
