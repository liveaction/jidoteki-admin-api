# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
#
# Copyright (c) 2015-2016 Alexander Williams, Unscramble <license@unscramble.jp>

[de reboot-get ()
  (unless (fork)
    (sys "SSH_ORIGINAL_COMMAND" "reboot")
    # use (exec) because we DONT want the result
    (exec 'nohup (pack *Admin_path "bin/wrapper.sh")) )

  (use Size Date Body
    (json-string [encode (list (cons "Status" (pack 202 " " (http-code 202) ])
    (response-generic 202 Size Date Body '(("Content-Type" . "application/json")) ]

(de reboot-request ()
  (if (validate-auth)
      (if *Post
          (http-msg 403)
          (reboot-get) )
      (http-msg 403) ) )

(reboot-request)
