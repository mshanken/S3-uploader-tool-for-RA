module.exports = function (grunt) {
  grunt.initConfig({
    aws: grunt.file.readJSON('aws-keys.json'), // Read the file
    aws_s3: {
      test_live: {
        options: {
          accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
          secretAccessKey: '<%= aws.AWSSecretKey %>', // You can also use env variables
          region: '<%= aws.AWSRegion %>',
          bucket: '<%= aws.AWSBucket %>',
          uploadConcurrency: 100, // 5 simultaneous uploads
          // downloadConcurrency: 5, // 5 simultaneous downloads
          differential: true, // Only uploads the files that have changed
          stream: true
        },
        files: [
          {expand: true, cwd: 'images/', src: ['**'], dest: 'wso/Restaurants', action: 'upload'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.registerTask('default', ['aws_s3']);
};

