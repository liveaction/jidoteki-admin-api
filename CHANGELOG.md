# Changelog

## 1.11.0 (2016-08-29)

  * Add 'JIDO_API_CUSTOM' env variable for loading custom API code, docs, html

## 1.10.2 (2016-04-30)

  * Update API Documentation to be much more clear and better organized

## 1.10.1 (2016-04-23)

  * Replace original FontAwesome fonts with smaller Fontello/FA font files

## 1.10.0 (2016-04-17)

  * Add Admin UI for web-based API management

## 1.9.1 (2016-04-17)

  * Fix issue #17 - HMAC auth bypassed when no token is set

## 1.9.0 (2016-04-12)

  * Add HMAC signature-based authentication
  * Add new text/markdown mime type
  * Update documentation explaining HMAC authentication
  * Implement fix to hide source code when calling a /default file directly
  * Fix issue #15 - Admin API crashes when 'update.log' is missing
  * Fix issue #16 - Missing certs status

## 1.8.0 (2016-04-06)

  * Add endpoint to upload and update TLS certificates

## 1.7.0 (2016-04-04)

  * Add endpoint to retrieve an encrypted debug bundle

## 1.6.1 (2016-03-31)

  * Fix issue #12 - Server cannot start when JIDO_API_PORT env var (patrixl)
  * Apply identical fix in #12 to JIDO_API_VERSION env var

## 1.6.0 (2016-03-22)

  * Use software packages with '.enc' extension instead of '.asc'

## 1.5.0 (2015-09-26)

  * Add endpoint to reboot the system
  * Update documentation to reflect the API's ability to manage all types of systems

## 1.4.0 (2015-09-22)

  * Make network interface configurable by outputting 'interface' to network.conf in static/dhcp mode (defaults to eth0)

## 1.3.1 (2015-09-20)

  * Output 'hostname' in dhcp mode as well

## 1.3.0 (2015-09-20)

  * Replace 'sudo' commands with calls to 'wrapper.sh'

## 1.2.2 (2015-09-16)

  * Output 'hostname' to network.conf

## 1.2.1 (2015-09-16)

  * Output network settings to network.conf in 'key=value' format

## 1.2.0 (2015-09-07)

  * Add support for running on a 32-bit OS
  * Increase minimum PicoLisp requirement to 3.1.10.2+ (json.l)

## 1.1.7 (2015-08-26)

  * Remove hardcoded paths for the Admin_path
  * Add 'JIDO_ADMIN_PATH' env variable for Admin_path
  * Update documentation

## 1.1.6 (2015-08-21)

  * Add endpoint to retrive the changelog of the appliance
  * Update API documentation

## 1.1.5 (2015-07-08)

  * Use 'nohup' when processing vm update, to detach it from the parent

## 1.1.4 (2015-07-08)

  * Update dependency versions

## 1.1.3 (2015-07-08)

  * Add REPO_PREFIX to 'Makefile' to specify alternate path of git repos
  * Actually add the code to fetch the API version

## 1.1.2 (2015-07-06)

  * Add endpoint to retrieve the version of the appliance

## 1.1.1 (2015-07-06)

  * Add endpoint to retrieve compressed logs

## 1.1.0 (2015-07-03)

  * Return JSON body during POST settings/update
  * Update documentation

## 1.0.2 (2015-06-22)

  * Disable fips in stunnel config (bug in CentOS 6.6)

## 1.0.1 (2015-06-18)

  * Add initial CHANGELOG.md
  * Add 'JIDO_STUNNEL_BIN' env variable for stunnel binary fullpath
  * Rename API process to 'jido-api' at boot
  * Update dependency versions
