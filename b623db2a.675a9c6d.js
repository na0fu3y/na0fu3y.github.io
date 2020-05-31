(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{181:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return b})),t.d(e,"metadata",(function(){return o})),t.d(e,"rightToc",(function(){return u})),t.d(e,"default",(function(){return E}));var a=t(1),r=t(9),c=(t(0),t(203)),b={id:"brainfuck-in-bigquery",title:"BigQuery Scripting \u3067 Brainf*ck",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery","brainfuck"]},o={permalink:"/blog/brainfuck-in-bigquery",source:"@site/blog/2020-01-21-brainfuck-in-bigquery.md",description:"# \u66f8\u3044\u305f\u52d5\u6a5f",date:"2020-01-21T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"},{label:"brainfuck",permalink:"/blog/tags/brainfuck"}],title:"BigQuery Scripting \u3067 Brainf*ck",truncated:!0,prevItem:{title:"BigQuery \u3067 1 \u5186\u3082\u6eb6\u304b\u3055\u306a\u3044\u4eba\u306e\u9854 (ZERO BYTE STRUCT \u3092\u8003\u6848\u3057\u305f)",permalink:"/blog/bigquery-sandbox"},nextItem:{title:"\u3010\u89e3\u6c7a\u6e08\u3011Cloud IAM \u3067\u30b5\u30fc\u30d3\u30b9\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304b\u3089\u5168\u6a29\u9650\u3092\u524a\u9664\u3059\u308b\u3068\u898b\u3048\u306a\u304f\u306a\u308b",permalink:"/blog/invisible-service-agent"}},u=[{value:"DECLARE",id:"declare",children:[]},{value:"SET",id:"set",children:[]},{value:"IF",id:"if",children:[]},{value:"LOOP",id:"loop",children:[]},{value:"WHILE",id:"while",children:[]},{value:"BREAK",id:"break",children:[]},{value:"CONTINUE",id:"continue",children:[]},{value:"RETURN",id:"return",children:[]},{value:"CALL",id:"call",children:[]},{value:"\u518d\u5e30\u3058\u3083\u306a\u3044\u7248",id:"\u518d\u5e30\u3058\u3083\u306a\u3044\u7248",children:[]},{value:"\u518d\u5e30 PROCEDURE \u7248",id:"\u518d\u5e30-procedure-\u7248",children:[]}],i={rightToc:u};function E(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u66f8\u3044\u305f\u52d5\u6a5f"},"\u66f8\u3044\u305f\u52d5\u6a5f"),Object(c.b)("p",null,"BigQuery \u4e2d\u5fc3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3067\u306f\u3001\u7d71\u8a08\u5206\u6790\u3084\u6a5f\u68b0\u5b66\u7fd2\u306e\u30c7\u30fc\u30bf\u6e96\u5099\u3092\u3001Cloud Composer \u306a\u3069\u304b\u3089 SQL \u3092\u4f7f\u3063\u305f\u30c7\u30fc\u30bf\u5909\u63db\u306b\u3088\u3063\u3066\u5b9f\u73fe\u3059\u308b\u3002\u3057\u304b\u3057\u3001\u76f4\u5217\u3067\u30c7\u30fc\u30bf\u5909\u63db\u3092\u884c\u3046\u5834\u5408\u306b\u306f ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/scripting"}),"\u6a19\u6e96 SQL \u306e\u30b9\u30af\u30ea\u30d7\u30c8")," \u3067\u5341\u5206\u306a\u30b1\u30fc\u30b9\u3082\u3042\u308a\u3001\u958b\u767a\u3092\u3057\u3066\u3064\u3089\u304f\u306a\u3044\u306a\u3089\u63a1\u7528\u3057\u305f\u3044\u601d\u3044\u304c\u3042\u3063\u305f\u3002\n\u5148\u65e5\u306e\u30b5\u30a4\u30ec\u30f3\u30c8\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3067\u3001\u5c0f\u3055\u306a\u30af\u30a8\u30ea\u306e\u9ad8\u901f\u5316\u304c\u884c\u308f\u308c\u305f\u3053\u3068\u304b\u3089\u3001\u5341\u5206\u306a\u901f\u5ea6\u304c\u3067\u308b\u3068\u4e88\u60f3\u3057\u305f\u3002\nBigQuery \u3067 Brainf*ck \u3092\u5b9f\u73fe\u3057\u3066\u3001\u30c1\u30e5\u30fc\u30ea\u30f3\u30b0\u5b8c\u5168\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u305f\u304b\u3063\u305f\u3002\u6b32\u3092\u8a00\u3048\u3070 SELECT \u6587\u3060\u3051\u3067\u5b9f\u73fe\u3057\u305f\u3044\u304c\u3001\u518d\u5e30 WITH \u53e5\u304c\u4f7f\u3048\u306a\u3044\u3053\u3068\u304b\u3089\u81ea\u5206\u306b\u306f\u5b9f\u73fe\u624b\u6bb5\u304c\u308f\u304b\u3089\u306a\u304b\u3063\u305f\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u306a\u3089\u3067\u304d\u308b\u3068\u601d\u3044\u3001\u3084\u3063\u3066\u307f\u305f\u3002"),Object(c.b)("h1",{id:"\u516c\u958b\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306b\u95a2\u6570\u516c\u958b\u3057\u307e\u3057\u305f"},"\u516c\u958b\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306b\u95a2\u6570\u516c\u958b\u3057\u307e\u3057\u305f"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CALL `bqfunc.brainfuck.brainfuck`(input, commands, output);\n")),Object(c.b)("h1",{id:"bigquery-\u30b9\u30af\u30ea\u30d7\u30c8\u3068\u306f"},"BigQuery \u30b9\u30af\u30ea\u30d7\u30c8\u3068\u306f"),Object(c.b)("p",null,"1 \u30b8\u30e7\u30d6\u3067\u8907\u6570\u306e\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3068\u5236\u5fa1\u69cb\u6587\u3092\u5229\u7528\u3067\u304d\u308b\u3002\n\u3088\u304f\u4f7f\u3046\u3082\u306e\u3060\u3051\u89e3\u8aac\u3092\u5165\u308c\u308b\u3002"),Object(c.b)("h2",{id:"declare"},"DECLARE"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"DECLARE name type [ DEFAULT expression]\n")),Object(c.b)("p",null,"\u5909\u6570\u5ba3\u8a00\u3002DEFAULT \u3092\u6307\u5b9a\u3057\u306a\u3044\u3068 NULL \u3067\u521d\u671f\u5316\u3055\u308c\u308b\u3002"),Object(c.b)("h2",{id:"set"},"SET"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SET name = expression\n")),Object(c.b)("p",null,"\u5909\u6570\u4ee3\u5165\u3002"),Object(c.b)("h2",{id:"if"},"IF"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"IF condition THEN\n  [if_statement_list]\n[ELSE\n  else_statement_list\n]\nEND IF;\n")),Object(c.b)("p",null,"\u6761\u4ef6\u5206\u5c90\u3002"),Object(c.b)("h2",{id:"loop"},"LOOP"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"LOOP\n  sql_statement_list\nEND LOOP;\n")),Object(c.b)("p",null,"\u7d42\u4e86\u6761\u4ef6\u306e\u306a\u3044\u7e70\u308a\u8fd4\u3057\u3002IF, BREAK \u3068\u5408\u308f\u305b\u3066\u4f7f\u3046\u3002"),Object(c.b)("h2",{id:"while"},"WHILE"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"WHILE boolean_expression DO\n  sql_statement_list\nEND WHILE;\n")),Object(c.b)("p",null,"\u7d42\u4e86\u6761\u4ef6\u306e\u3042\u308b\u7e70\u308a\u8fd4\u3057\u3002"),Object(c.b)("h2",{id:"break"},"BREAK"),Object(c.b)("p",null,"\u7e70\u308a\u8fd4\u3057\u304b\u3089\u629c\u3051\u308b\u3002"),Object(c.b)("h2",{id:"continue"},"CONTINUE"),Object(c.b)("p",null,"\u4eca\u306e\u30d6\u30ed\u30c3\u30af\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u3066\u3001\u7e70\u308a\u8fd4\u3057\u306e\u5148\u982d\u306b\u623b\u308b\u3002"),Object(c.b)("h2",{id:"return"},"RETURN"),Object(c.b)("p",null,"\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u7d42\u4e86\u3059\u308b\u3002\u65e9\u671f\u30ea\u30bf\u30fc\u30f3\u3067\u4f7f\u3046\u3002"),Object(c.b)("h2",{id:"call"},"CALL"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CALL procedure_name\n")),Object(c.b)("p",null,"\u30d7\u30ed\u30b7\u30fc\u30b8\u30e3\u3092\u547c\u3076\u3002\u69cb\u9020\u5316\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306b\u4f7f\u3046\u3002"),Object(c.b)("h1",{id:"\u958b\u767a\u3057\u3066\u307f\u3066\u3064\u3089\u304b\u3063\u305f\u3053\u3068"},"\u958b\u767a\u3057\u3066\u307f\u3066\u3064\u3089\u304b\u3063\u305f\u3053\u3068"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"BigQuery \u306e\u30b8\u30e7\u30d6\u5b9f\u884c\u6642\u9593 6 \u6642\u9593\u5236\u7d04\u304c\u3001\u30b9\u30af\u30ea\u30d7\u30c8 1 \u3064\u3067\u304b\u304b\u3063\u3066\u304f\u308b\u305f\u3081\u3001\u591a\u6bb5\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u30af\u30a8\u30ea\u306e\u5b9f\u884c\u306f\u96e3\u3057\u3044"),Object(c.b)("li",{parentName:"ul"},"\u30af\u30a8\u30ea\u5c65\u6b74\u304c\u5927\u91cf\u306e ",Object(c.b)("inlineCode",{parentName:"li"},"CREATE TEMP FUNCTION __type_coercion_internal__")," \u3067\u6c5a\u67d3\u3055\u308c\u3001\u8907\u6570\u540c\u6642\u5b9f\u884c\u3059\u308b\u3068\u30a6\u30a7\u30d6 UI \u3067\u306f\u7d50\u679c\u304c\u8ffd\u3048\u306a\u304f\u306a\u308b"),Object(c.b)("li",{parentName:"ul"},"ARRAY \u306e 1 \u3064\u306e\u8981\u7d20\u3060\u3051\u66f8\u304d\u63db\u3048\u308b\u30b3\u30b9\u30c8\u304c\u9ad8\u3044"),Object(c.b)("li",{parentName:"ul"},"\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u3088\u308b\u30aa\u30fc\u30d0\u30d8\u30c3\u30c9\u304c\u3068\u3066\u3082\u5927\u304d\u304f\u611f\u3058\u308b"),Object(c.b)("li",{parentName:"ul"},"API \u304b\u3089\u7d50\u679c\u3092\u56de\u53ce\u3067\u304d\u306a\u3044")),Object(c.b)("h1",{id:"\u5b9f\u884c\u7d50\u679c"},"\u5b9f\u884c\u7d50\u679c"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u884c"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"f0_"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hello World!")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"\u7d4c\u904e\u6642\u9593 10 \u5206 26 \u79d2\n\u51e6\u7406\u3055\u308c\u305f\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8 450\n")),Object(c.b)("p",null,"\u3046\u307e\u304f\u52d5\u3044\u3066\u3044\u305d\u3046\u3002"),Object(c.b)("h1",{id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"},"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"),Object(c.b)("h2",{id:"\u518d\u5e30\u3058\u3083\u306a\u3044\u7248"},"\u518d\u5e30\u3058\u3083\u306a\u3044\u7248"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE OR REPLACE PROCEDURE\n  brainfuck.brainfuck(IN input ARRAY<INT64>,\n    IN commands STRING,\n    INOUT output ARRAY<INT64>)\nBEGIN\n\n    DECLARE command STRING;\n\n    DECLARE buffer ARRAY<INT64> DEFAULT ARRAY(SELECT 0 FROM UNNEST(GENERATE_ARRAY(1, 64)));\n    DECLARE buffer_offset INT64 DEFAULT 0;\n    DECLARE input_offset INT64 DEFAULT 0;\n    DECLARE depth INT64;\n\n    DECLARE commands_position INT64 DEFAULT 0;\n\n    LOOP\n        SET commands_position = commands_position + 1;\n        SET command = SUBSTR(commands, commands_position, 1);\n        IF command = '' THEN\n            RETURN;\n        END IF;\n\n        IF command = '>' THEN\n            SET buffer_offset = buffer_offset + 1;\n            CONTINUE;\n        END IF;\n\n        IF command = '<' THEN\n            SET buffer_offset = buffer_offset - 1;\n            CONTINUE;\n        END IF;\n\n        IF command = '+' THEN\n            SET buffer = ARRAY(SELECT IF(offset = buffer_offset, b + 1, b) FROM UNNEST(buffer) b WITH OFFSET AS offset ORDER BY offset);\n            CONTINUE;\n        END IF;\n\n        IF command = '-' THEN\n            SET buffer = ARRAY(SELECT IF(offset = buffer_offset, b - 1, b) FROM UNNEST(buffer) b WITH OFFSET AS offset ORDER BY offset);\n            CONTINUE;\n        END IF;\n\n        IF command = '.' THEN\n            SET output = ARRAY_CONCAT(output, [buffer[OFFSET(buffer_offset)]]);\n            CONTINUE;\n        END IF;\n\n        IF command = ',' THEN\n            SET buffer = ARRAY(SELECT IF(offset = buffer_offset, input[OFFSET(input_offset)], b) FROM UNNEST(buffer) b WITH OFFSET AS offset ORDER BY offset);\n            SET input_offset = input_offset + 1;\n            CONTINUE;\n        END IF;\n\n        IF command = '[' AND buffer[OFFSET(buffer_offset)] = 0 THEN\n            SET depth = 1;\n            WHILE depth > 0 DO\n                SET commands_position = commands_position + 1;\n                SET command = SUBSTR(commands, commands_position, 1);\n                IF command = '[' THEN\n                    SET depth = depth + 1;\n                    CONTINUE;\n                END IF;\n                IF command = ']' THEN\n                    SET depth = depth - 1;\n                    CONTINUE;\n                END IF;\n                IF command = '' THEN\n                    SELECT ERROR('missing-bracket');\n                END IF;\n            END WHILE;\n            CONTINUE;\n        END IF;\n\n        IF command = ']' AND buffer[OFFSET(buffer_offset)] <> 0 THEN\n            SET depth = 1;\n            WHILE depth > 0 DO\n                SET commands_position = commands_position - 1;\n                SET command = SUBSTR(commands, commands_position, 1);\n                IF command = ']' THEN\n                    SET depth = depth + 1;\n                    CONTINUE;\n                END IF;\n                IF command = '[' THEN\n                    SET depth = depth - 1;\n                    CONTINUE;\n                END IF;\n                IF command = '' THEN\n                    SELECT ERROR('missing-bracket');\n                END IF;\n            END WHILE;\n            CONTINUE;\n        END IF;\n    END LOOP;\nEND;\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"DECLARE\n  output ARRAY<INT64> DEFAULT [];\nCALL\n  bqfunc.brainfuck.brainfuck([],\n    '++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.',\n    output);\nSELECT\n  CODE_POINTS_TO_STRING(output);\n")),Object(c.b)("h2",{id:"\u518d\u5e30-procedure-\u7248"},"\u518d\u5e30 PROCEDURE \u7248"),Object(c.b)("p",null,"PROCEDURE \u3067\u518d\u5e30\u3092\u4f7f\u3063\u3066\u304d\u308c\u3044\u306b\u304b\u3051\u308b\u3068\u601d\u3063\u305f\u306e\u3067\u3059\u304c\u3001\u30a8\u30e9\u30fc\u306b\u3088\u308a Hello World \u3092\u52d5\u4f5c\u3055\u305b\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n",Object(c.b)("inlineCode",{parentName:"p"},"Out of stack space due to deeply-nested procedure call to a.brainfuck"),"\u3068\u306e\u30a8\u30e9\u30fc\u306a\u305f\u3081\u3001\u30cd\u30b9\u30c8\u306e\u5c0f\u3055\u3044\u8a18\u8ff0\u306f\u52d5\u304d\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE OR REPLACE PROCEDURE\n  a.brainfuck(IN input ARRAY<INT64>,\n    IN input_index INT64,\n    IN commands ARRAY<STRING>,\n    IN commands_index INT64,\n    IN buffer ARRAY<INT64>,\n    IN buffer_index INT64,\n    INOUT output ARRAY<INT64>)\nBEGIN\n    DECLARE command STRING;\n    DECLARE depth INT64;\n    DECLARE counter INT64;\n    SET command = commands[SAFE_OFFSET(commands_index)];\n    IF command IS NULL THEN\n        RETURN;\n    END IF;\n    IF command = '>' THEN\n        CALL a.brainfuck(input, input_index, commands, commands_index + 1, buffer, buffer_index + 1, output);\n        RETURN;\n    END IF;\n    IF command = '<' THEN\n        CALL a.brainfuck(input, input_index, commands, commands_index + 1, buffer, buffer_index - 1, output);\n        RETURN;\n    END IF;\n    IF command = '+' THEN\n        CALL a.brainfuck(\n            input,\n            input_index,\n            commands,\n            commands_index + 1,\n            ARRAY(SELECT IF(offset = buffer_index, b + 1, b)\n                    FROM UNNEST(buffer) b\n                    WITH OFFSET AS offset\n                    ORDER BY offset),\n            buffer_index,\n            output);\n        RETURN;\n    END IF;\n    IF command = '-' THEN\n        CALL a.brainfuck(\n            input,\n            input_index,\n            commands,\n            commands_index + 1,\n            ARRAY(SELECT IF(offset = buffer_index, b - 1, b)\n                    FROM UNNEST(buffer) b\n                    WITH OFFSET AS offset\n                    ORDER BY offset),\n            buffer_index,\n            output);\n        RETURN;\n    END IF;\n    IF command = '.' THEN\n        SET output = ARRAY_CONCAT(output, [buffer[OFFSET(buffer_index)]]);\n        CALL a.brainfuck(input, input_index, commands, commands_index + 1, buffer, buffer_index, output);\n        RETURN;\n    END IF;\n    IF command = ',' THEN\n        CALL a.brainfuck(\n            input,\n            input_index + 1,\n            commands,\n            commands_index + 1,\n            ARRAY(SELECT IF(offset = buffer_index, input[OFFSET(input_index)], b)\n                    FROM UNNEST(buffer) b\n                    WITH OFFSET AS offset\n                    ORDER BY offset),\n            buffer_index,\n            output);\n        RETURN;\n    END IF;\n    IF command = '[' AND buffer[OFFSET(buffer_index)] = 0 THEN\n        SET depth = 1;\n        WHILE depth > 0 DO\n            SET commands_index = commands_index + 1;\n            SET command = commands[OFFSET(commands_index)];\n            IF command = '[' THEN\n                SET depth = depth + 1;\n                CONTINUE;\n            END IF;\n            IF command = ']' THEN\n                SET depth = depth - 1;\n                CONTINUE;\n            END IF;\n        END WHILE;\n        CALL a.brainfuck(\n            input,\n            input_index,\n            commands,\n            commands_index + 1,\n            buffer,\n            buffer_index,\n            output);\n        RETURN;\n    END IF;\n    IF command = ']' AND buffer[OFFSET(buffer_index)] <> 0 THEN\n        SET depth = 1;\n        WHILE depth > 0 DO\n            SET commands_index = commands_index - 1;\n            SET command = commands[OFFSET(commands_index)];\n            IF command = ']' THEN\n                SET depth = depth + 1;\n                CONTINUE;\n            END IF;\n            IF command = '[' THEN\n                SET depth = depth - 1;\n                CONTINUE;\n            END IF;\n        END WHILE;\n        CALL a.brainfuck(\n            input,\n            input_index,\n            commands,\n            commands_index + 1,\n            buffer,\n            buffer_index,\n            output);\n        RETURN;\n    END IF;\n    CALL a.brainfuck(input, input_index, commands, commands_index + 1, buffer, buffer_index, output);\nEND\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"DECLARE commands ARRAY<STRING> DEFAULT ['-','-','[','>','-','-','-','>','-','>','-','>','+','+','>','-','<','<','<','<','<','-','-','-','-','-','-','-',']','>','-','-','.','>','-','-','-','-','-','-','-','-','-','.','>','-','-','.','.','+','+','+','.','>','-','-','-','-','.','>','+','+','+','+','+','+','+','+','+','.','<','<','.','+','+','+','.','-','-','-','-','-','-','.','<','-','.','>','>','+','.'];\nDECLARE output ARRAY<INT64> DEFAULT [];\nDECLARE buffer ARRAY<INT64> DEFAULT ARRAY(SELECT 0 FROM UNNEST(GENERATE_ARRAY(1, 1024)));\n\nCALL a.brainfuck([], 0, commands, 0, buffer, 0, output);\n\nSELECT CODE_POINTS_TO_STRING(output);\n")),Object(c.b)("h1",{id:"\u304a\u308f\u308a\u306b"},"\u304a\u308f\u308a\u306b"),Object(c.b)("p",null,"BigQuery \u30b9\u30af\u30ea\u30d7\u30c8\u3067 brainf*ck \u306e\u30a4\u30f3\u30bf\u30d7\u30ea\u30bf\u304c\u5b9f\u88c5\u3067\u304d\u305f\u3002\n\u518d\u5e30\u30d7\u30ed\u30b7\u30fc\u30b8\u30e3\u306e\u79fb\u690d\u306f\u4e0d\u53ef\u80fd\u3068\u7d50\u8ad6\u3065\u3051\u307e\u3057\u305f\u3002\u518d\u5e30\u304c\u53ef\u80fd\u306a\u307b\u3069\u3001\u30b9\u30bf\u30c3\u30af\u304c\u8a70\u3081\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u518d\u5e30\u306f 50 \u307e\u3067\u306e\u5236\u7d04\u304c\u3042\u308a\u307e\u3059\u3002"))}E.isMDXComponent=!0},203:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return l}));var a=t(0),r=t.n(a);function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function b(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},c=Object.keys(n);for(a=0;a<c.length;a++)t=c[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=r.a.createContext({}),E=function(n){var e=r.a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):o({},e,{},n)),t},d=function(n){var e=E(n.components);return r.a.createElement(i.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},f=Object(a.forwardRef)((function(n,e){var t=n.components,a=n.mdxType,c=n.originalType,b=n.parentName,i=u(n,["components","mdxType","originalType","parentName"]),d=E(t),f=a,l=d["".concat(b,".").concat(f)]||d[f]||m[f]||c;return t?r.a.createElement(l,o({ref:e},i,{components:t})):r.a.createElement(l,o({ref:e},i))}));function l(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var c=t.length,b=new Array(c);b[0]=f;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=n,o.mdxType="string"==typeof n?n:a,b[1]=o;for(var i=2;i<c;i++)b[i]=t[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);