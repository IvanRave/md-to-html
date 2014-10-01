# MD to HTML

## Description

Converts markdown files (.md) to html files (.html), using a library 'Marked'.

http://github.com/chjj/marked/

Then opens the result in your browser (by default chromium).

## Notes

- To quick access set this alias in your ~/.bash_aliases:

    ```alias 'mdhtml'='node ~/gitrepo/md-to-html/index '```

- Use a next command to generate and view a result file:

    ```mdhtml my-file.md```

- You can change a default browser in the index.js file: DEFAULT_BROWSER

- A result file can be created with name: your-file.md.html in the same directory

- No styles, just layout
