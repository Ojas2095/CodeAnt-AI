"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Search,
  RefreshCw,
  Plus,
  Github,
  Gitlab as GitLab,
  Key,
  Database,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react"

export default function CodeAntAI() {
  const [currentView, setCurrentView] = useState<"login" | "dashboard">("login")
  const [authMode, setAuthMode] = useState<"saas" | "self-hosted">("saas")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const repositories = [
    {
      name: "design-system",
      language: "React",
      size: "7320 KB",
      updated: "1 day ago",
      isPublic: true,
      contributors: ["/abstract-geometric-shapes.png", "/abstract-geometric-shapes.png"],
    },
    {
      name: "codeant-ci-app",
      language: "Javascript",
      size: "5871 KB",
      updated: "2 days ago",
      isPublic: false,
      contributors: ["/diverse-group-collaborating.png", "/abstract-geometric-shapes.png"],
    },
    {
      name: "analytics-dashboard",
      language: "Python",
      size: "4521 KB",
      updated: "5 days ago",
      isPublic: false,
      contributors: ["/abstract-geometric-shapes.png", "/abstract-geometric-shapes.png"],
    },
    {
      name: "mobile-app",
      language: "Swift",
      size: "3096 KB",
      updated: "3 days ago",
      isPublic: true,
      contributors: ["/abstract-geometric-shapes.png", "/abstract-geometric-shapes.png"],
    },
    {
      name: "e-commerce-platform",
      language: "Java",
      size: "6210 KB",
      updated: "6 days ago",
      isPublic: false,
      contributors: ["/abstract-geometric-shapes.png", "/abstract-geometric-shapes.png"],
    },
    {
      name: "blog-website",
      language: "HTML/CSS",
      size: "1876 KB",
      updated: "4 days ago",
      isPublic: true,
      contributors: ["/abstract-geometric-shapes.png", "/abstract-geometric-pattern.png"],
    },
    {
      name: "social-network",
      language: "PHP",
      size: "5432 KB",
      updated: "7 days ago",
      isPublic: false,
      contributors: ["/abstract-geometric-shapes.png", "/abstract-geometric-shapes.png"],
    },
  ]

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      React: "bg-blue-500",
      Javascript: "bg-yellow-500",
      Python: "bg-green-500",
      Swift: "bg-orange-500",
      Java: "bg-red-500",
      "HTML/CSS": "bg-purple-500",
      PHP: "bg-indigo-500",
    }
    return colors[language] || "bg-gray-500"
  }

  if (currentView === "login") {
    return (
      <div className="min-h-screen bg-gray-50 flex">
        {/* Left side - Stats */}
        <div className="hidden lg:flex lg:w-1/2 bg-white p-8 items-center justify-center">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">AI to Detect & Autofix Bad Code</h2>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-600">Language Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Developers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">100K+</div>
                <div className="text-sm text-gray-600">Hours Saved</div>
              </div>
            </div>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  </div>
                  <span className="font-medium">Issues Fixed</span>
                </div>
                <div className="text-sm text-green-600 font-medium">↑ 14% This week</div>
              </div>
              <div className="text-3xl font-bold text-gray-900">500K+</div>
            </Card>
          </div>
        </div>

        {/* Right side - Login */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-xl font-semibold">CodeAnt AI</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Welcome to CodeAnt AI</h1>

              <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
                <button
                  onClick={() => setAuthMode("saas")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    authMode === "saas" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  SAAS
                </button>
                <button
                  onClick={() => setAuthMode("self-hosted")}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    authMode === "self-hosted" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Self Hosted
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {authMode === "saas" ? (
                <>
                  <Button
                    variant="outline"
                    className="w-full justify-center py-3 bg-transparent"
                    onClick={() => setCurrentView("dashboard")}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Sign in with Github
                  </Button>
                  <Button variant="outline" className="w-full justify-center py-3 bg-transparent">
                    <div className="w-5 h-5 mr-2 bg-blue-600 rounded"></div>
                    Sign in with Bitbucket
                  </Button>
                  <Button variant="outline" className="w-full justify-center py-3 bg-transparent">
                    <div className="w-5 h-5 mr-2 bg-blue-500 rounded"></div>
                    Sign in with Azure Devops
                  </Button>
                  <Button variant="outline" className="w-full justify-center py-3 bg-transparent">
                    <GitLab className="w-5 h-5 mr-2 text-orange-600" />
                    Sign in with GitLab
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full justify-center py-3 bg-transparent">
                    <GitLab className="w-5 h-5 mr-2 text-orange-600" />
                    Self Hosted GitLab
                  </Button>
                  <Button variant="outline" className="w-full justify-center py-3 bg-transparent">
                    <Key className="w-5 h-5 mr-2" />
                    Sign in with SSO
                  </Button>
                </>
              )}
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
              By signing up you agree to the <span className="font-medium">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-semibold">CodeAnt AI</span>
              </div>
              <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4">
              <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                <option>UtkarshDhairyaPa...</option>
              </select>
            </div>
          </div>

          <nav className="flex-1 p-4">
            <div className="space-y-1">
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md">
                <Database className="w-4 h-4 mr-3" />
                Repositories
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <div className="w-4 h-4 mr-3 flex items-center justify-center">
                  <span className="text-xs">&lt;/&gt;</span>
                </div>
                AI Code Review
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <div className="w-4 h-4 mr-3 bg-gray-300 rounded"></div>
                Cloud Security
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <div className="w-4 h-4 mr-3 bg-gray-300 rounded"></div>
                How to Use
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Settings className="w-4 h-4 mr-3" />
                Settings
              </a>
            </div>
          </nav>

          <div className="p-4 border-t border-gray-200">
            <div className="space-y-1">
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <HelpCircle className="w-4 h-4 mr-3" />
                Support
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <LogOut className="w-4 h-4 mr-3" />
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button className="lg:hidden mr-4" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Repositories</h1>
                <p className="text-sm text-gray-600">33 total repositories</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh All
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Repository
              </Button>
            </div>
          </div>
        </header>

        {/* Search and filters */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search Repositories" className="pl-10" />
          </div>
        </div>

        {/* Repository list */}
        <div className="flex-1 bg-white">
          <div className="divide-y divide-gray-200">
            {repositories.map((repo, index) => (
              <div key={index} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{repo.name}</h3>
                      <Badge variant={repo.isPublic ? "secondary" : "outline"} className="text-xs">
                        {repo.isPublic ? "Public" : "Private"}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                        <span>{repo.language}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Database className="w-4 h-4" />
                        <span>{repo.size}</span>
                      </div>
                      <span>Updated {repo.updated}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {repo.contributors.map((avatar, i) => (
                      <Avatar key={i} className="w-8 h-8">
                        <AvatarImage src={avatar || "/placeholder.svg"} />
                        <AvatarFallback>{i + 1}</AvatarFallback>
                      </Avatar>
                    ))}
                    {repo.contributors.length > 2 && (
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600">
                        +2
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
