// AegisSX2 offline settings companion. It never sends or stores the imported INI.
(function (root) {
  "use strict";

  const QUALITY = Object.freeze({ native: 1, hd: 2, fullhd: 3, qhd: 4, uhd: 6 });

  function readValue(ini, section, key) {
    let current = "";
    for (const line of ini.split(/\r?\n/)) {
      const heading = /^\s*\[([^\]]+)\]\s*$/.exec(line);
      if (heading) current = heading[1].trim().toLowerCase();
      if (current !== section.toLowerCase()) continue;
      const entry = /^\s*([^;#=\s]+)\s*=\s*(.*?)\s*$/.exec(line);
      if (entry && entry[1].toLowerCase() === key.toLowerCase()) return entry[2];
    }
    return null;
  }

  function readBoolean(ini, section, key) {
    return ["true", "1"].includes(readValue(ini, section, key)?.trim().toLowerCase());
  }

  function setValue(ini, section, key, value) {
    const newline = ini.includes("\r\n") ? "\r\n" : "\n";
    const lines = ini.split(/\r?\n/);
    let start = -1;
    let end = lines.length;
    for (let i = 0; i < lines.length; i++) {
      const heading = /^\s*\[([^\]]+)\]\s*$/.exec(lines[i]);
      if (!heading) continue;
      if (start >= 0) { end = i; break; }
      if (heading[1].trim().toLowerCase() === section.toLowerCase()) start = i;
    }
    if (start < 0) {
      if (lines.length === 1 && !lines[0]) lines.length = 0;
      if (lines.length && lines.at(-1) !== "") lines.push("");
      lines.push(`[${section}]`, `${key} = ${value}`);
      return lines.join(newline) + newline;
    }
    for (let i = start + 1; i < end; i++) {
      const entry = /^(\s*)([^;#=\s]+)(\s*=\s*)(.*)$/.exec(lines[i]);
      if (entry && entry[2].toLowerCase() === key.toLowerCase()) {
        lines[i] = `${entry[1]}${entry[2]}${entry[3]}${value}`;
        return lines.join(newline);
      }
    }
    lines.splice(end, 0, `${key} = ${value}`);
    return lines.join(newline);
  }

  function applySettings(ini, choices) {
    if (!Number.isInteger(choices.quality) || !Object.values(QUALITY).includes(choices.quality))
      throw new Error("Choose a supported resolution.");
    if (typeof choices.widescreen !== "boolean" || typeof choices.noInterlace !== "boolean" ||
        typeof choices.vsync !== "boolean")
      throw new Error("Invalid graphics option.");
    let result = setValue(ini, "EmuCore/GS", "upscale_multiplier", choices.quality.toFixed(6));
    result = setValue(result, "EmuCore/GS", "VsyncEnable", String(choices.vsync));
    result = setValue(result, "EmuCore", "EnableWideScreenPatches", String(choices.widescreen));
    result = setValue(result, "EmuCore", "EnableNoInterlacingPatches", String(choices.noInterlace));
    return result;
  }

  const api = { QUALITY, readValue, readBoolean, setValue, applySettings };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.AegisSettings = api;
})(globalThis);
