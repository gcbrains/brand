# Branding

[![publish-badge][]](https://github.com/gcbrains/branding/actions/workflows/publish.yml)

Contains resources and usage details about our brand.

## Brand name

Brand name is `GC Brains` and our domain name is `gcbrains.com`. Below you can
see correct and wrong usages within some certain contexts.

### In Plain text

| ✅ Correct | ⛔ Wrong                         |
| ---------- | -------------------------------- |
| GC Brains  | G C Brains, G&C Brains, GCBrains |

### Usernames, URLs, Paths and File Names

| ✅ Correct | ⛔ Wrong                 |
| ---------- | ------------------------ |
| `gcbrains` | `gc-brains`, `gc_brains` |

### Coding

| Type         | ✅ Correct | ⛔ Wrong    |
| ------------ | ---------- | ----------- |
| `camelCase`  | `gcbrains` | `gcBrains`  |
| `PascalCase` | `Gcbrains` | `GcBrains`  |
| `kebab-case` | `gcbrains` | `gc-brains` |
| `snake_case` | `gcbrains` | `gc_brains` |
| `UPPER_CASE` | `GCBRAINS` | `GC_BRAINS` |

> We are aware of the fact that there is an inconsistency here. `GC Brains`
> should've been `gcBrains` when it is `camelCase`, right? This is intentional
> because first of all our domain name is `gcbrains.com`. And it is pretty
> simple to keep all other usages to follow `gcbrains`. So other than plain
> text, stick to this simpler representation.

## Logo Construction

Logo consists of two parts, a logomark `(oVo)` and a wordmark `GC Brains` which
are aligned either vertically or horizontally. Alternatively logomark can be
used stand alone.

There are four colorings: primary, secondary, black and white.

As a result there are 12 combinations as shown below;

|               | logomark  | logo-horizontal | logo-vertical |
| ------------- | --------- | --------------- | ------------- |
| __primary__   | ![lm-p][] | ![l-p-h][]      | ![l-p-v][]    |
| __secondary__ | ![lm-s][] | ![l-s-h][]      | ![l-s-v][]    |
| __black__     | ![lm-b][] | ![l-b-h][]      | ![l-b-v][]    |
| __white__     | ![lm-w][] | ![l-w-h][]      | ![l-w-v][]    |

### Logomark usage in plain text

When logo is needed in a place where image cannot be included, you may use
`(oVo)` or `(oVo) GC Brains`.

## Choosing a Logo

> TODO

## Exceptions

There are some exceptions to make logo look clean and not distorted in any way.
All of them have their own specific usages, so use these exports __only__ where
they are exported for.

### Profile Pictures

Don't use regular logomark, use thumbnail logomarks in profile pictures and let
them crop it for you.

![lm-p-thumbnail][]
![lm-s-thumbnail][]

### Google Workspace

Google wants 320x132, but distorts and shows 72x26 in gmail 🤯. So this logo is
distorded on purpose so that gmail shows in the right ratio 🤷.

![lm-s-gmail][]

## Badges

![primary-badge][]
![secondary-badge][]


[publish-badge]: https://github.com/gcbrains/branding/actions/workflows/publish.yml/badge.svg

[lm-p]: ./assets/logo/png/small-32px/logomark-primary-32h.png
[l-p-h]: ./assets/logo/png/small-32px/logo-primary-horizontal-32h.png
[l-p-v]: ./assets/logo/png/small-32px/logo-primary-vertical-96w.png
[lm-s]: ./assets/logo/png/small-32px/logomark-secondary-32h.png
[l-s-h]: ./assets/logo/png/small-32px/logo-secondary-horizontal-32h.png
[l-s-v]: ./assets/logo/png/small-32px/logo-secondary-vertical-96w.png
[lm-b]: ./assets/logo/png/small-32px/logomark-black-32h.png
[l-b-h]: ./assets/logo/png/small-32px/logo-black-horizontal-32h.png
[l-b-v]: ./assets/logo/png/small-32px/logo-black-vertical-96w.png
[lm-w]: ./assets/logo/png/small-32px/logomark-white-32h.png
[l-w-h]: ./assets/logo/png/small-32px/logo-white-horizontal-32h.png
[l-w-v]: ./assets/logo/png/small-32px/logo-white-vertical-96w.png
[lm-p-t]: ./assets/logo/png/medium-32px/logomark-primary-thumbnail-32h.png
[lm-s-t]: ./assets/logo/png/medium-32px/logomark-secondary-thumbnail-32h.png
[lm-p-thumbnail]: ./assets/logo/exceptions/thumbnail/logomark-primary-thumbnail-32h.png
[lm-s-thumbnail]: ./assets/logo/exceptions/thumbnail/logomark-secondary-thumbnail-32h.png
[lm-s-gmail]: ./assets/logo/exceptions/google-workspace/logomark-secondary-gmail.png

[primary-badge]: https://img.shields.io/badge/dynamic/style-primary-f9465b?style=for-the-badge&labelColor=ffedef&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzciIGhlaWdodD0iNzciIHZpZXdCb3g9IjAgMCA3NyA3NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTc2LjUgMzguNUM3Ni41IDU5LjQ4NjggNTkuNDg2OCA3Ni41IDM4LjUgNzYuNUMxNy41MTMyIDc2LjUgMC41IDU5LjQ4NjggMC41IDM4LjVDMC41IDE3LjUxMzIgMTcuNTEzMiAwLjUgMzguNSAwLjVDNTkuNDg2OCAwLjUgNzYuNSAxNy41MTMyIDc2LjUgMzguNVoiIGZpbGw9IiNGOTQ2NUIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjE1MDg4IDM4LjVDOC4xNTA4OCAyOC44MzkgMTUuOTg5OCAyMSAyNS42NTA4IDIxSDI2LjY0QzI2LjgyMDYgMjEgMjYuOTg0MSAyMS4xMDY3IDI3LjA1NjggMjEuMjcyTDM4LjA4MzIgNDUuOTM0OUMzOC4yNDI2IDQ2LjI5NzYgMzguNzU3MiA0Ni4yOTc2IDM4LjkxNjYgNDUuOTM0OUM0Mi41OTIyIDM3LjU3NDYgNDYuMjY2OSAyOS42MzM0IDQ5Ljk0MzEgMjEuMjcyQzUwLjAxNTcgMjEuMTA2NyA1MC4xNzkyIDIxIDUwLjM1OTggMjFINTEuMzQ5QzYxLjAxIDIxIDY4Ljg0ODkgMjguODM5IDY4Ljg0ODkgMzguNUM2OC44NDg5IDQ4LjAwODMgNjEuMjU1NyA1NS43NTE4IDUxLjgwNTUgNTUuOTk0MUM1MS41NTQxIDU2LjAwMDUgNTEuMzQ5IDU1Ljc5NjEgNTEuMzQ5IDU1LjU0NDdWNTIuNTEzN0M1MS4zNDkgNTIuMjYyMyA1MS41NTM4IDUyLjA1OTMgNTEuODA1MSA1Mi4wNTFDNTkuMDc4NCA1MS44MTAyIDY0LjkwNzUgNDUuODMxNiA2NC45MDc1IDM4LjVDNjQuOTA3NSAzMS41NTI4IDU5LjY3MzggMjUuODIwNSA1Mi45MzY4IDI1LjAzMzZDNTIuNzQyMiAyNS4wMTA4IDUyLjU1NjcgMjUuMTIwMyA1Mi40Nzc4IDI1LjI5OTZMNTAuODE1OCAyOS4wOEM1MC42NzAxIDI5LjQxMTUgNTAuOTUyMiAyOS43Nzc4IDUxLjMxMzQgMjkuNzUyM0M1MS41MjA0IDI5LjczNzcgNTEuNzI5NCAyOS43MzAzIDUxLjk0MDIgMjkuNzMwM0M1Ni43ODM2IDI5LjczMDMgNjAuNzA5OSAzMy42NTY2IDYwLjcwOTkgMzguNUM2MC43MDk5IDQzLjM0MzMgNTYuNzgzNiA0Ny4yNjk2IDUxLjk0MDIgNDcuMjY5NkM0OS4xNTc0IDQ3LjI2OTYgNDYuNjc3MyA0NS45NzM1IDQ1LjA3MDcgNDMuOTUxOUM0NC44NDU0IDQzLjY2ODQgNDQuMzg0NiA0My43MDggNDQuMjM4OSA0NC4wMzk1TDM4LjkxNjYgNTUuNzI4QzM4Ljc1NzIgNTYuMDkwNyAzOC4yNDI2IDU2LjA5MDcgMzguMDgzMiA1NS43MjhMMzIuNzU0IDQ0LjAyMzdDMzIuNjA4IDQzLjY5MTcgMzIuMTQ2MyA0My42NTI1IDMxLjkyMTMgNDMuOTM2OUMzMC4zMTUxIDQ1Ljk2NzEgMjcuODI5NiA0Ny4yNjk2IDI1LjAzOTkgNDcuMjY5NkMyMC4xOTY2IDQ3LjI2OTYgMTYuMjcwMiA0My4zNDMzIDE2LjI3MDIgMzguNUMxNi4yNzAyIDMzLjY1NjYgMjAuMTk2NiAyOS43MzAzIDI1LjAzOTkgMjkuNzMwM0MyNS4yNTcxIDI5LjczMDMgMjUuNDcyNSAyOS43MzgyIDI1LjY4NTggMjkuNzUzN0MyNi4wNDc0IDI5Ljc4IDI2LjMzMDUgMjkuNDEzMyAyNi4xODQ2IDI5LjA4MTNMMjQuNTIyIDI1LjI5OTZDMjQuNDQzMSAyNS4xMjAzIDI0LjI1NzYgMjUuMDEwOCAyNC4wNjMgMjUuMDMzNkMxNy4zMjYxIDI1LjgyMDUgMTIuMDkyMyAzMS41NTI4IDEyLjA5MjMgMzguNUMxMi4wOTIzIDQ1LjgzMTYgMTcuOTIxNCA1MS44MTAyIDI1LjE5NDggNTIuMDUxQzI1LjQ0NiA1Mi4wNTkzIDI1LjY1MDggNTIuMjYyMyAyNS42NTA4IDUyLjUxMzdWNTUuNTQ0N0MyNS42NTA4IDU1Ljc5NjEgMjUuNDQ1NyA1Ni4wMDA1IDI1LjE5NDQgNTUuOTk0MUMxNS43NDQxIDU1Ljc1MTggOC4xNTA4OCA0OC4wMDgzIDguMTUwODggMzguNVpNNDcuNDA4NiAzNi44Mjk4QzQ3LjIxNjcgMzcuMzUwMyA0Ny4xMTE5IDM3LjkxMjkgNDcuMTExOSAzOC41QzQ3LjExMTkgNDEuMTY2NSA0OS4yNzM2IDQzLjMyODIgNTEuOTQwMiA0My4zMjgyQzU0LjYwNjggNDMuMzI4MiA1Ni43Njg1IDQxLjE2NjUgNTYuNzY4NSAzOC41QzU2Ljc2ODUgMzUuODMzNCA1NC42MDY4IDMzLjY3MTcgNTEuOTQwMiAzMy42NzE3QzUwLjA2ODMgMzMuNjcxNyA0OC40NDUyIDM0LjczNyA0Ny42NDQgMzYuMjk0M0w0Ny40MDg2IDM2LjgyOThaTTI1LjAzOTkgMzMuNjcxN0MyMi4zNzMzIDMzLjY3MTcgMjAuMjExNyAzNS44MzM0IDIwLjIxMTcgMzguNUMyMC4yMTE3IDQxLjE2NjUgMjIuMzczMyA0My4zMjgyIDI1LjAzOTkgNDMuMzI4MkMyNy43MDY1IDQzLjMyODIgMjkuODY4MiA0MS4xNjY1IDI5Ljg2ODIgMzguNUMyOS44NjgyIDM1LjgzMzQgMjcuNzA2NSAzMy42NzE3IDI1LjAzOTkgMzMuNjcxN1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=
[secondary-badge]: https://img.shields.io/badge/dynamic/style-secondary-E6E6E6?style=for-the-badge&labelColor=000000&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzciIGhlaWdodD0iNzciIHZpZXdCb3g9IjAgMCA3NyA3NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTc2LjUgMzguNUM3Ni41IDU5LjQ4NjggNTkuNDg2OCA3Ni41IDM4LjUgNzYuNUMxNy41MTMyIDc2LjUgMC41IDU5LjQ4NjggMC41IDM4LjVDMC41IDE3LjUxMzIgMTcuNTEzMiAwLjUgMzguNSAwLjVDNTkuNDg2OCAwLjUgNzYuNSAxNy41MTMyIDc2LjUgMzguNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNTA4OCAzOC41QzguMTUwODggMjguODM5IDE1Ljk4OTggMjEgMjUuNjUwOCAyMUgyNi42NEMyNi44MjA2IDIxIDI2Ljk4NDEgMjEuMTA2NyAyNy4wNTY4IDIxLjI3MkwzOC4wODMyIDQ1LjkzNDlDMzguMjQyNiA0Ni4yOTc2IDM4Ljc1NzIgNDYuMjk3NiAzOC45MTY2IDQ1LjkzNDlDNDIuNTkyMiAzNy41NzQ2IDQ2LjI2NjkgMjkuNjMzNCA0OS45NDMxIDIxLjI3MkM1MC4wMTU3IDIxLjEwNjcgNTAuMTc5MiAyMSA1MC4zNTk4IDIxSDUxLjM0OUM2MS4wMSAyMSA2OC44NDg5IDI4LjgzOSA2OC44NDg5IDM4LjVDNjguODQ4OSA0OC4wMDgzIDYxLjI1NTcgNTUuNzUxOCA1MS44MDU1IDU1Ljk5NDFDNTEuNTU0MSA1Ni4wMDA1IDUxLjM0OSA1NS43OTYxIDUxLjM0OSA1NS41NDQ3VjUyLjUxMzdDNTEuMzQ5IDUyLjI2MjMgNTEuNTUzOCA1Mi4wNTkzIDUxLjgwNTEgNTIuMDUxQzU5LjA3ODQgNTEuODEwMiA2NC45MDc1IDQ1LjgzMTYgNjQuOTA3NSAzOC41QzY0LjkwNzUgMzEuNTUyOCA1OS42NzM4IDI1LjgyMDUgNTIuOTM2OCAyNS4wMzM2QzUyLjc0MjIgMjUuMDEwOCA1Mi41NTY3IDI1LjEyMDMgNTIuNDc3OCAyNS4yOTk2TDUwLjgxNTggMjkuMDhDNTAuNjcwMSAyOS40MTE1IDUwLjk1MjIgMjkuNzc3OCA1MS4zMTM0IDI5Ljc1MjNDNTEuNTIwNCAyOS43Mzc3IDUxLjcyOTQgMjkuNzMwMyA1MS45NDAyIDI5LjczMDNDNTYuNzgzNiAyOS43MzAzIDYwLjcwOTkgMzMuNjU2NiA2MC43MDk5IDM4LjVDNjAuNzA5OSA0My4zNDMzIDU2Ljc4MzYgNDcuMjY5NiA1MS45NDAyIDQ3LjI2OTZDNDkuMTU3NCA0Ny4yNjk2IDQ2LjY3NzMgNDUuOTczNSA0NS4wNzA3IDQzLjk1MTlDNDQuODQ1NCA0My42Njg0IDQ0LjM4NDYgNDMuNzA4IDQ0LjIzODkgNDQuMDM5NUwzOC45MTY2IDU1LjcyOEMzOC43NTcyIDU2LjA5MDcgMzguMjQyNiA1Ni4wOTA3IDM4LjA4MzIgNTUuNzI4TDMyLjc1NCA0NC4wMjM3QzMyLjYwOCA0My42OTE3IDMyLjE0NjMgNDMuNjUyNSAzMS45MjEzIDQzLjkzNjlDMzAuMzE1MSA0NS45NjcxIDI3LjgyOTYgNDcuMjY5NiAyNS4wMzk5IDQ3LjI2OTZDMjAuMTk2NiA0Ny4yNjk2IDE2LjI3MDIgNDMuMzQzMyAxNi4yNzAyIDM4LjVDMTYuMjcwMiAzMy42NTY2IDIwLjE5NjYgMjkuNzMwMyAyNS4wMzk5IDI5LjczMDNDMjUuMjU3MSAyOS43MzAzIDI1LjQ3MjUgMjkuNzM4MiAyNS42ODU4IDI5Ljc1MzdDMjYuMDQ3NCAyOS43OCAyNi4zMzA1IDI5LjQxMzMgMjYuMTg0NiAyOS4wODEzTDI0LjUyMiAyNS4yOTk2QzI0LjQ0MzEgMjUuMTIwMyAyNC4yNTc2IDI1LjAxMDggMjQuMDYzIDI1LjAzMzZDMTcuMzI2MSAyNS44MjA1IDEyLjA5MjMgMzEuNTUyOCAxMi4wOTIzIDM4LjVDMTIuMDkyMyA0NS44MzE2IDE3LjkyMTQgNTEuODEwMiAyNS4xOTQ4IDUyLjA1MUMyNS40NDYgNTIuMDU5MyAyNS42NTA4IDUyLjI2MjMgMjUuNjUwOCA1Mi41MTM3VjU1LjU0NDdDMjUuNjUwOCA1NS43OTYxIDI1LjQ0NTcgNTYuMDAwNSAyNS4xOTQ0IDU1Ljk5NDFDMTUuNzQ0MSA1NS43NTE4IDguMTUwODggNDguMDA4MyA4LjE1MDg4IDM4LjVaTTQ3LjQwODYgMzYuODI5OEM0Ny4yMTY3IDM3LjM1MDMgNDcuMTExOSAzNy45MTI5IDQ3LjExMTkgMzguNUM0Ny4xMTE5IDQxLjE2NjUgNDkuMjczNiA0My4zMjgyIDUxLjk0MDIgNDMuMzI4MkM1NC42MDY4IDQzLjMyODIgNTYuNzY4NSA0MS4xNjY1IDU2Ljc2ODUgMzguNUM1Ni43Njg1IDM1LjgzMzQgNTQuNjA2OCAzMy42NzE3IDUxLjk0MDIgMzMuNjcxN0M1MC4wNjgzIDMzLjY3MTcgNDguNDQ1MiAzNC43MzcgNDcuNjQ0IDM2LjI5NDNMNDcuNDA4NiAzNi44Mjk4Wk0yNS4wMzk5IDMzLjY3MTdDMjIuMzczMyAzMy42NzE3IDIwLjIxMTcgMzUuODMzNCAyMC4yMTE3IDM4LjVDMjAuMjExNyA0MS4xNjY1IDIyLjM3MzMgNDMuMzI4MiAyNS4wMzk5IDQzLjMyODJDMjcuNzA2NSA0My4zMjgyIDI5Ljg2ODIgNDEuMTY2NSAyOS44NjgyIDM4LjVDMjkuODY4MiAzNS44MzM0IDI3LjcwNjUgMzMuNjcxNyAyNS4wMzk5IDMzLjY3MTdaIiBmaWxsPSIjRjk0NjVCIi8+Cjwvc3ZnPgo=
