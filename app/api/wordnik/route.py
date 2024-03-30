from wordnik import *
apiUrl = 'http://api.wordnik.com/v5'
apiKey = 'c23b746d074135dc9500c0a61300a3cb7647e53ec2b9b658e'
client = swagger.ApiClient(apiKey, apiUrl)
wordsApi = WordsApi.WordsApi(client)
print(wordsApi.searchWords('a'))
# response = wordsApi.searchWords('a')
# print(help(client))
# wordsApi = WordApi.WordsApi(client)
# example = wordsApi.searchWords('a')
# print(response)
# wordApi = WordApi.WordApi(client)
# example = wordApi.getTopExample('irony')
# print(example.text)