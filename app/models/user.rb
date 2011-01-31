class User < ActiveRecord::Base
  has_attached_file :image,
                    :styles => {:default => '100x100#'}


  #
  def self.random_login
    login = ''

    consonant = 'qwrtpsdfghjklzxcvbnm'.split('').to_a
    vowel = 'eyuioa'.split('').to_a
    (1..3).each do
      login << consonant[rand(consonant.size - 1)]
      login << vowel[rand(vowel.size - 1)]
    end

    digits = ('0'..'9').to_a
    (1..2).each { login << digits[rand(digits.size - 1)] }

    return login
  end

end

