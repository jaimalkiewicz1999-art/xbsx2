# AegisSX2

AegisSX2 is an Xbox Developer Mode PS2 emulator built on XBSX2/PCSX2. This fork keeps XBSX2's proven UWP/WinRT host, Xbox input, Direct3D rendering, storage support, and PCSX2 emulation core while adding a console-first frontend influenced by PS5SX2.

### Aegis milestone 1

- Fresh installs boot directly into the controller-friendly game cover grid.
- The Cover Downloader is prefilled with the community-maintained `xlenore/ps2-covers` serial template; the source remains editable.
- Xbox Series X|S uses the existing AVX2 build path, while the standard UWP build remains available for Xbox One-class hardware.
- Existing XBSX2 settings, save states, per-game configuration, patches, RetroAchievements, removable-storage access, and emulator behavior are preserved.
- No BIOS files or game images are included. Use dumps from hardware and games you own.

### Aegis work in progress

- The fullscreen library has a perspective **Game Shelf** view. The game list settings screen can add a folder and scan supported disc images or PS2 ELF homebrew; an empty library links to that screen.
- **Aegis Graphics** puts the existing internal-resolution control near the top of graphics settings. Per-game graphics settings link to available game patches, which may include an FPS patch for a particular game. A higher render resolution does not change the game's native frame rate.
- `tools/aegis-phone/` is an offline phone settings preview that edits a user-supplied `PCSX2.ini` while preserving unrelated keys. It is file based; live paired Xbox control still needs an Xbox networking implementation and on-device verification.
- The Series X|S package is built by the existing Xbox UWP AVX2 workflow. A packaged build confirms compilation and packaging; performance, game compatibility, removable-storage access, and controller navigation require real-console checks.

The Xbox-specific build lives in `pcsx2-uwp/`. The experimental Aegis work is developed on `feature/aegis-xbox-console-ui`.

<p align="center">
  <img src="bin/resources/icons/AppBanner.svg" alt="XBSX2 App Banner" width="840" />
</p>

<p align="center">
  <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/XboxEmulationHub/XBSX2/.github/workflows/windows_build_matrix.yml?style=for-the-badge" />
  <a href="https://discord.gg/WCmxvvxHqu">
    <img alt="Discord Server" src="https://img.shields.io/discord/1007582798598647889?style=for-the-badge&amp;color=%235CA8FA&amp;label=Xbox%20Emulation%20Hub&amp;logo=discord&amp;logoColor=white" />
  </a>
</p>

XBSX2 is a fork of [PCSX2](https://github.com/PCSX2/), a free and open-source PlayStation 2 (PS2) emulator, adapted for UWP/Xbox environments.

It emulates PS2 hardware using a combination of MIPS CPU [interpreters](https://en.wikipedia.org/wiki/Interpreter_(computing)), [recompilers](https://en.wikipedia.org/wiki/Dynamic_recompilation), and a [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) that manages hardware state and system memory.

## System Requirements

- Recommended: Xbox Series S or Xbox Series X
- Supported with limited compatibility: Xbox One, Xbox One S, and Xbox One X

Please note that a BIOS dump from a legitimately-owned PS2 console is required to use the emulator. For more information, visit [this page](https://pcsx2.net/docs/setup/gather/#how-to-dump-your-ps2-bios)

## Building

Compilation Guide: [Compiling XBSX2](https://wiki.sternserv.xyz/docs/development/compiling-xbsx2-guide)

## Credits

- [PCSX2](https://github.com/PCSX2/pcsx2) - For the base PS2 emulation with great performance
- [SirMangler](https://github.com/SirMangler) / [TheRhysWyrill](https://github.com/TheRhysWyrill) - For rewriting PCSX2 for UWP
- [Rockso85](https://github.com/Rockso85) / [redhood1337](https://github.com/redhood1337) / [fffathur](https://github.com/fffathur) - For asset support
