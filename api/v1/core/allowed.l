# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
#
# Copyright (c) 2015 Alexander Williams, Unscramble <license@unscramble.jp>

(allowed ("api/v1/admin")
  v hash public private ca certs debug reboot newtoken token setup license settings update logs version changelog )

(allow "docs" T)

(allow "index.html")
