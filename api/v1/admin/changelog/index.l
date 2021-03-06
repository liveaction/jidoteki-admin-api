# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
#
# Copyright (c) 2015-2016 Alexander Williams, Unscramble <license@unscramble.jp>

[de changelog-get ()
  (let Changelog (pack *Admin_path "etc/changelog.txt")
    (if (info Changelog)
        (use Info Size Date Body
          (json-file Changelog)

          (response-generic 200 Size Date Body '(("Content-Type" . "text/plain"))) )
        (http-msg 404) ]

(de changelog-request ()
  (if (validate-auth)
      (unless *Post (changelog-get))
      (http-msg 403) ) )

(changelog-request)
