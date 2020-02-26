+++
date = "2018-02-16T14:06:05-04:00"
title = "Vim is a life style"
+++

# vim outstanding configuration file

```
" From cowboy configuration

" Use the Solarized Dark theme
set background=dark
colorscheme solarized
"colorscheme desert

" Make Vim more useful
set nocompatible
" Use the OS clipboard by default (on versions compiled with `+clipboard`)
set clipboard=unnamed
" Enhance command-line completion
set wildmenu
" Allow cursor keys in insert mode
set esckeys
" Allow backspace in insert mode
set backspace=indent,eol,start
" Optimize for fast terminal connections
set ttyfast
" Add the g flag to search/replace by default
set gdefault
" Use UTF-8 without BOM
set encoding=utf-8 nobomb
" Change mapleader
let mapleader=","
" Don’t add empty newlines at the end of files
set binary
set noeol
" Centralize backups, swapfiles and undo history
set backupdir=~/dotfiles/.vim/backups
set directory=~/dotfiles/.vim/swaps
if exists("&undodir")
	set undodir=~/dotfiles/.vim/undo
endif

set tags+=~/dotfiles/data/systags
" Don’t create backups when editing files in certain directories
set backupskip=/tmp/*,/private/tmp/*

" Respect modeline in files
set modeline
set modelines=4
" Enable per-directory .vimrc files and disable unsafe commands in them
set exrc
set secure
" Enable line numbers
set number
" Enable syntax highlighting
syntax on
" Highlight current line
set cursorline
" Make tabs as wide as two spaces
set tabstop=2
" Show “invisible” characters
set lcs=tab:▸\ ,trail:·,eol:¬,nbsp:_
set list
" Highlight searches
set hlsearch
" Ignore case of searches
set ignorecase
" Highlight dynamically as pattern is typed
set incsearch
" Always show status line
set laststatus=2
" Enable mouse in all modes
set mouse=a
" Disable error bells
set noerrorbells
" Don’t reset cursor to start of line when moving around.
set nostartofline
" Show the cursor position
set ruler
" Don’t show the intro message when starting Vim
set shortmess=atI
" Show the current mode
set showmode
" Show the filename in the window titlebar
set title
" Show the (partial) command as it’s being typed
set showcmd
" Use relative line numbers
if exists("&relativenumber")
	set relativenumber
	au BufReadPost * set relativenumber
endif
" Start scrolling three lines before the horizontal window border
set scrolloff=3

" ----------------------------------------
"vundle and pathogen for installing plugins
" ----------------------------------------
"source ~/.vim/vundle.vim
filetype off
execute pathogen#infect()
filetype plugin indent on
syntax on
" ----------------------------------------
" function key binding
" ----------------------------------------
" <F1> for help
nnoremap <f2> :edit .<cr>
set pastetoggle=<f3>
nnoremap <F4> :!deploy<CR>

nnoremap <F5> :call CompileCode()<CR>
imap <F5> <ESC>:call CompileCode()<CR>
vmap <F5> <ESC>:call CompileCode()<CR>

nnoremap <F6> :call RunResult()<CR>

nnoremap <F7> :FufFile<CR>

"nmap <F11> :so $VIM\basic.vim<CR>
"nmap <F12> :mks! $VIM\basic.vim<CR>

"run current file as command
nnoremap <F11> :! %
"compile and run automatically
nnoremap <F12> :.w !bash

" ----------------------------------------
"basic settings
" ----------------------------------------
set noerrorbells
set novisualbell
"col murphy
set guioptions-=T
"behavior
set hls
set cul
set ic
"show match
set sm
set mps=(:),{:},[:]
"text
set list
set listchars=tab:\|\
set wrap
set ai
set si
set cin
set is
"folding
set fen
set fdm=syntax
set scr=6
set cmdheight=2
set nobk
set aw
set ar
"encoding
set enc=utf-8
set fenc=utf-8
set tenc=utf-8
"guifont	list of font names to be used in the GUI
set gfn=DejaVu\ Sans\ Mono\ 16
set ts=4
set sw=4
set com=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
"filetype
"filetype plugin indent on

" ----------------------------------------
" More key bindings
" ----------------------------------------
"quick edit dotvimrc file
if has("win32")
	map <silent> <leader>ee :e $VIM\_vimrc<cr>
	map <silent> <leader>rc :source $VIM\_vimrc<cr> " 快速载入 vimrc 文件
else
	map <silent> <leader>ef :e /usr/share/vim/vimfiles<cr>
	map <silent> <leader>ee :e ~/.vimrc<cr>
	map <silent> <leader>rc :source ~/.vimrc<cr> " 快速载入 vimrc 文件
	let helptags="~/.vim/doc"
	set helplang=cn
endif
"manipulating tabs
nmap <C-t> :tabnew<cr>
nmap <C-n> :tabnext<cr>
nmap <C-k> :tabclose<cr>
nmap <C-Tab> :tabnext<cr>
"using buffers
nmap <C-b> :buffers<cr>
nmap <C-d> :bnext<cr>
nmap <C-e> :bprevious<cr>
"tab to indent in normal mode
nmap <tab> v><cr>
nmap <S-tab> v<<cr>
"sessions enabled
set sessionoptions=buffers,sesdir,help,tabpages,winsize
au VimLeave * mks! $VIM\basic.vim
"windows operation
nmap <silent> gk :wincmd k<CR>
nmap <silent> gh :wincmd h<CR>
nmap <silent> gl :wincmd l<CR>
nmap <silent> g1 :wincmd t<CR>
nmap <silent> g2 :wincmd b<Bar>:wincmd k<CR>
nmap <silent> g3 :wincmd t<Bar>:wincmd j<CR>
nmap <silent> g4 :wincmd b<CR>

nmap <silent> gt g2<Bar>:wincmd h<CR>
nmap <silent> gb g3<Bar>:wincmd l<CR>

nmap <silent> gp :wincmd p<CR>
nmap <silent> g= :wincmd =<CR>
nmap <silent> gx :wincmd x<CR>

nmap <silent> hs :split<Bar>:wincmd j<CR>
nmap <silent> vs :vsplit<Bar>:wincmd l<CR>
nmap <silent> "cs :close<CR>
"quick comments,leader is c
"normal comment
map cl <plug>NERDCommenterComment
"toggle comment stats
map ci <leader>ci

"sorroud words and lines,leader is s
"in visual mode, use `s"` to soround
map ss i"<esc>eli"
map sl 0i"<esc>Ai"
"deleting whitespaces
nmap dh :%s/^ *//g
nmap dt :%s/ *$//g
nmap db :%s/^\n//g
"macros
nmap ma qaYp<C-a>q
"Close pair symbles
inoremap ( ()<esc>i
"inoremap ) =ClosePair(')')
inoremap { {}<esc>i
"inoremap } =ClosePair('}')
inoremap [ []<esc>i
"inoremap ] =ClosePair(']')
inoremap < <><esc>i
"inoremap > =ClosePair('>')

" ----------------------------------------
"plugins configurations
" ----------------------------------------
"indent guides
let g:indent_guides_enable_on_vim_startup = 1
hi IndentGuidesOdd  ctermbg=lightgrey
hi IndentGuidesEven ctermbg=darkgray

"UltiSnips
let g:UltiSnipsExpandTrigger="<tab>"
let g:UltiSnipsJumpForwardTrigger="<c-b>"
let g:UltiSnipsJumpBackwardTrigger="<c-z>"
" If you want :UltiSnipsEdit to split your window.
let g:UltiSnipsEditSplit="vertical"

"fuzzy finder
let g:fuf_modesDisable = []
let g:fuf_mrufile_maxItem = 400
let g:fuf_mrucmd_maxItem = 400
nnoremap <leader>cc     :FufFile<CR>
nnoremap <leader>cd     :FufDir<CR>
" ----------------<>------------------------
" Functions
" ----------------------------------------
func! GotoCurrentDir()
	exec "cd %:h"
endfunc

"autocompile

func! CompileCode()
        exec "w"
        if &filetype == "cpp"
                exec "call CompileGpp()"
        elseif &filetype == "c"
                exec "call CompileGcc()"
        elseif &filetype == "java"
                exec "call CompileJava()"
        elseif &filetype == "lua"
                exec "call RunLua()"
        elseif &filetype == "moon"
                exec "call CompileMoon()"
        elseif &filetype == "py"
                exec "call RunPython()"
        endif
endfunc

func! RunResult()
        exec "w"
        if search("mpi\.h") != 0
            exec "!mpirun -np 4 ./%<"
        elseif &filetype == "cpp"
            exec "! ./%<"
        elseif &filetype == "c"
            exec "! ./%<"
        elseif &filetype == "python"
            exec "call RunPython()"
        elseif &filetype == "lua"
            exec "call RunLua()"
        elseif &filetype == "java"
            exec "!java %<"
        endif
endfunc

func! RunPython()
	exec "w"
    exec "!python %"
endfunc

func! CompileJava()
    exec "!javac %"
endfunc

func! RunLua()
	exec "w"
    exec "!luajit %"
endfunc

func! CompileMoon()
	exec "w"
	exec "!moon %"
	exec "!moonc %"
	let target =  "%:r".".lua"
	exec "!luajit ".target
endfunc

func! CompileGcc()
    exec "w"
    let compilecmd="!gcc "
    let compileflag="-o %< "
    if search("mpi\.h") != 0
        let compilecmd = "!mpicc "
    endif
    if search("glut\.h") != 0
        let compileflag .= " -lglut -lGLU -lGL "
    endif
    if search("cv\.h") != 0
        let compileflag .= " -lcv -lhighgui -lcvaux "
    endif
    if search("omp\.h") != 0
        let compileflag .= " -fopenmp "
    endif
    if search("math\.h") != 0
        let compileflag .= " -lm "
    endif
    exec compilecmd." % ".compileflag
endfunc

func! CompileGpp()
    exec "w"
    let compilecmd="!g++ "
    let compileflag="-o %< "
    if search("mpi\.h") != 0
        let compilecmd = "!mpic++ "
    endif
    if search("glut\.h") != 0
        let compileflag .= " -lglut -lGLU -lGL "
    endif
    if search("cv\.h") != 0
        let compileflag .= " -lcv -lhighgui -lcvaux "
    endif
    if search("omp\.h") != 0
        let compileflag .= " -fopenmp "
    endif
    if search("math\.h") != 0
        let compileflag .= " -lm "
    endif
    exec compilecmd." % ".compileflag
endfunc

" Strip trailing whitespace (,ss)
function! StripWhitespace()
	let save_cursor = getpos(".")
	let old_query = getreg('/')
	:%s/\s\+$//e
	call setpos('.', save_cursor)
	call setreg('/', old_query)
endfunction
noremap <leader>ss :call StripWhitespace()<CR>
" Save a file as root (,W)
noremap <leader>W :w !sudo tee % > /dev/null<CR>

" Automatic commands
if has("autocmd")
	" Enable file type detection
	filetype on
	" Treat .json files as .js
	autocmd BufNewFile,BufRead *.json setfiletype json syntax=javascript
	" Treat .md files as Markdown
	autocmd BufNewFile,BufRead *.md setlocal filetype=markdown
endif
```
