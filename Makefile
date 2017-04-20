.PHONY: check_brew check_watchman check_yarn run_relay run_graphql run_app

check_brew:
	@brew --version 1>/dev/null || /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

check_watchman:
	@watchman --version 1>/dev/null || brew install watchman

check_yarn:
	@yarn --version 1>/dev/null || brew install yarn
	@yarn

run_relay:
	yarn run relay

run_graphql:
	yarn run graphql-dev

run_app:
	yarn run dev

dev: check_brew check_watchman check_yarn run_relay run_app

graphql-dev: check_brew check_yarn run_graphql
