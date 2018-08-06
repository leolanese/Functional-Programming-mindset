```javascript
var a = 2;
var b = 4;
console.log(a+b);
```

Now time for some code:
@[Implement the pure function `greet` following the specification]({ "stubs": ["pure/pure1.js"], "command": "node_modules/mocha/bin/mocha pure/pure1.spec.js --reporter list" })

@[Get the even numbers in an array]({ "stubs": ["pure/pure1.js"], "command": "node pure/pure1.js" })


?[What is the answer to Life, the Universe and Everything?]
-[ ] There is no answer to that!
-[ ] Sleep and eat
-[x] Easy, this is 42
-[ ] Peace & Love



# TECHIO> annotate
# Usage

```bash
TECHIO> annotate --file <FILENAME> --position <LINE[:COLUMN]> [OPTIONS] <MESSAGE>
```

# Description
Annotate the client code editor with margin marker and an associated message.


# Options

`-f, --file <FILENAME>` FILENAME is used to select the code editor associated with the displayed annotation. If a client editor filename is contained in the command filename, this editor is selected. If the FILENAME does not match with a client editor filename, the annotation is not displayed.


`-p, --position <LINE[:COLUMN]>` LINE represents the line of the marker. A COLUMN value can be appended to give more details about the precise position of the annotation. LINE and COLUMN are integer values.


`-t, --type <TYPE>` TYPE of the annotation. Valid values include: info, warning, and error. The default value is error.


`-c, --channel <CHANNEL>` The annotation information can also be optionally printed on a CHANNEL.

# Examples
Display a warning annotation on the line 3 of a main.js editor file with the associated message: warn: ';' not found.

```bash
TECHIO> annotate --type "warning" --file "a.js" --position 3 warn: ';' not found
```

Display an error annotation on the line 4 of a Main.java editor file with the following message: error: ';' expected at end of line. It also prints the message on a compilation channel with the name of the file, the line number, and the column.

```bash
TECHIO> annotate --channel "compilation" --file "Main.java" --position 4:8 error: ';' expected at end of line
```
