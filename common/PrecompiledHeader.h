// SPDX-FileCopyrightText: 2002-2026 PCSX2 Dev Team
// SPDX-License-Identifier: GPL-3.0+

#include <memory>
#include <atomic>
#include <csignal>
#include <cerrno>
#include <cstdio>

// temporary measure
#if defined(_WIN32)
#define WINRT_XBOX
#endif
