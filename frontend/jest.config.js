module.exports = {
	collectCoverageFrom: ['src/components/**/*.js', 'src/utils/**/*.js'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupFiles: [
		'<rootDir>/config/testing/shim.js',
		'<rootDir>/config/testing/enzyme.js'
	],
	moduleNameMapper: { '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less)$': 'identity-obj-proxy'
    }
};