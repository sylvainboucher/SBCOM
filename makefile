SRC_DIR = src
TEST_DIR = test

PREFIX = .
BUILD_DIR = ${PREFIX}/build

BASE_FILES = ${SRC_DIR}/SBCOM.js\
    ${SRC_DIR}/sandbox.js\
	${SRC_DIR}/core.js

MODULES = ${SRC_DIR}/intro.js\
	${BASE_FILES}\
	${SRC_DIR}/outro.js

JSF = ${BUILD_DIR}/SBCOM.js

all: ${JSF}
	@@echo "SBCOM build complete."

${JSF}: ${MODULES} | ${BUILD_DIR}
	@@echo "Building" ${JSF}
	@@cat ${MODULES} > ${JSF};

