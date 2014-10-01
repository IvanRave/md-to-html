# MD to HTML

## Description

Converts markdown files (.md) to html files (.html), using a library 'Marked'.

    http://github.com/chjj/marked/

Then opens the result in your browser (by default chromium).

## Tips

- To quick access set this alias in your ~/.bash_aliases

    ```alias 'mdhtml'='node ~/gitrepo/md-to-html/index '```

- Use command to generate and view result

    ```mdhtml my-file.md```

    ```chromium my-file.md.html```

- You can change a default browser in index.js DEFAULT_BROWSER
