default:
	@just --list

# updates package name in `README.md`
package packaged_file_name:
	#!/usr/bin/env sh
	sed -i -E "s/(\.\/main\/archive\/)(.+?)(([[:digit:]]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))(\.pdf)/\.\/main\/archive\/{{replace(packaged_file_name," ","%20")}}/g" README.md
