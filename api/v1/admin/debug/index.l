# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
#
# Copyright (c) 2015-2016 Alexander Williams, Unscramble <license@unscramble.jp>

[de debug-get ()
  (sys "SSH_ORIGINAL_COMMAND" "debug")
  (if (call (pack *Admin_path "bin/wrapper.sh"))
      (httpEcho (pack *Upload_path "debug-bundle.tar") "application/octet-stream" 1 T)
      (http-msg 404) ]

(de debug-request ()
  (if (validate-auth)
      (if *Post
          (http-msg 400)
          (debug-get) )
      (http-msg 403) ) )

(debug-request)
